class OrderBook {
    constructor() {
        this.buyOrders = [];
        this.sellOrders = [];
    }

    addOrder(order) {
        if (order.type === 'buy') {
            this.addBuyOrder(order);
        } else if (order.type === 'sell') {
            this.addSellOrder(order);
        } else {
            console.error('Invalid order type:', order.type);
        }
    }

    addBuyOrder(order) {
        this.buyOrders.push(order);
        this.sortBuyOrders();
        this.matchOrders();
    }

    addSellOrder(order) {
        this.sellOrders.push(order);
        this.sortSellOrders();
        this.matchOrders();
    }

    sortBuyOrders() {
        this.buyOrders.sort((a, b) => b.price - a.price);
    }

    sortSellOrders() {
        this.sellOrders.sort((a, b) => a.price - b.price);
    }

    matchOrders() {
        while (this.buyOrders.length > 0 && this.sellOrders.length > 0) {
            const buyOrder = this.buyOrders[0];
            const sellOrder = this.sellOrders[0];

            if (buyOrder.price >= sellOrder.price) {
                // Execute the trade
                console.log(`Trade: Buy ${buyOrder.amount} at $${sellOrder.price}`);

                // Adjust order quantities
                buyOrder.amount -= sellOrder.amount;
                this.sellOrders.shift();

                if (buyOrder.amount <= 0) {
                    // Remove the buy order if fully filled
                    this.buyOrders.shift();
                } else {
                    // Re-sort buy orders after partial fill
                    this.sortBuyOrders();
                }
            } else {
                // No matching orders, exit the loop
                break;
            }
        }
    }

    displayOrderBook() {
        console.log('--- Order Book ---');
        console.log('Buy Orders:');
        this.buyOrders.forEach(order => console.log(`Price: $${order.price} | Amount: ${order.amount}`));

        console.log('\nSell Orders:');
        this.sellOrders.forEach(order => console.log(`Price: $${order.price} | Amount: ${order.amount}`));
        console.log('------------------');
    }
}

// Example Usage:
const orderBook = new OrderBook();

// Simulate adding buy and sell orders
orderBook.addOrder({ type: 'buy', amount: 5, price: 10 });
orderBook.addOrder({ type: 'sell', amount: 3, price: 8 });
orderBook.addOrder({ type: 'sell', amount: 2, price: 12 });

// Display the order book
orderBook.displayOrderBook();
