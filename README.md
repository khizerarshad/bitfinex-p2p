P2P Distributed Exchange System using Grenache

This project demonstrates a basic implementation of a peer-to-peer (P2P) distributed exchange system using Grenache, a DHT (Distributed Hash Table) based networking platform. The system allows nodes in the network to send and receive orders in a decentralized manner.
Prerequisites

    Node.js (Download and installation instructions are available at the Node.js Official Website)
    npm (Comes with Node.js)

Installation

    Install Grenache Grape

    Grenache Grape is a DHT service that forms the backbone of our network. Install it globally using npm:

    bash

npm install -g grenache-grape

Clone the Repository

Clone the project repository to your local machine:


Install Dependencies

Inside the project directory, install the necessary Node.js dependencies:

bash

    npm install

Running the System

    Start Grape Instances

    Open two separate terminal windows or tabs for running Grape instances. Run the following commands in each:

    bash

# In the first terminal
grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'

# In the second terminal
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'

Run Peer Nodes

For each peer in the network, open a new terminal window or tab. Navigate to the project directory and start a peer node:

bash

    node peer-node.js

    Follow the prompt in each peer node terminal to enter orders.

Interacting with the System

In each peer node terminal, you will be prompted to enter an order in the format type amount price (e.g., buy 100 50). The node sends the order to the network, simulating a basic order handling in a distributed exchange.
System Components

    Peer Node (peer-node.js): Represents a peer in the network capable of sending and receiving orders.

Notes

    This implementation is a basic demonstration and is not suitable for production use.
    For a full-fledged system, consider implementing sophisticated order matching, error handling, and network resilience mechanisms.
    The system does not include a locking mechanism for order processing atomicity. Orders are processed independently by each node.

Due to less time I was not able to implement Orderbook, so you can find the logic in orderbook.js


