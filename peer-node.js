const { PeerRPCServer, PeerRPCClient } = require('grenache-nodejs-http');
const Link = require('grenache-nodejs-link');
const readline = require('readline');

class PeerNode {
    constructor(port, grapeAddress) {
        this.link = new Link({ grape: grapeAddress });
        this.link.start();

        this.peer = new PeerRPCServer(this.link, { timeout: 300000 });
        this.peer.init();

        this.client = new PeerRPCClient(this.link, {});
        this.client.init();

        this.service = this.peer.transport('server');
        this.service.listen(port);

        this.orderbook = [];
        this.setupServer();
    }

    setupServer() {
        this.service.on('request', (rid, key, payload, handler) => {
            this.orderbook.push(payload);
            console.log(`Received order: ${JSON.stringify(payload)}`);
            handler.reply(null, 'Order received');
        });

        setInterval(() => {
            this.link.announce('p2p_exchange', this.service.port, {});

        }, 1000);
    }

    sendOrder(order) {
        this.client.request('p2p_exchange', order, { timeout: 10000 }, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    }
}

const peerNode = new PeerNode(1337 + Math.floor(Math.random() * 1000), 'http://127.0.0.1:30001');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your order (type, amount, price): ', (answer) => {
    const [type, amount, price] = answer.split(' ');
    peerNode.sendOrder({ type, amount: parseFloat(amount), price: parseFloat(price) });
    rl.close();
});
