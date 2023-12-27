const { PeerRPCServer } = require('grenache-nodejs-http');
const Link = require('grenache-nodejs-link');

const link = new Link({ grape: 'http://127.0.0.1:30001' });
link.start();

const peer = new PeerRPCServer(link, { timeout: 300000 });
peer.init();

const service = peer.transport('server');
service.listen(40001);

let lock = false;

setInterval(function () {
    link.announce('lock_service', service.port, {});
}, 1000);

service.on('request', (rid, key, payload, handler) => {
    if (payload.acquire && !lock) {
        lock = true;
        handler.reply(null, { locked: true });
    } else if (payload.release && lock) {
        lock = false;
        handler.reply(null, { locked: false });
    } else {
        handler.reply(null, { locked: lock });
    }
});
