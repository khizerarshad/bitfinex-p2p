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

Due to less time I was not able to implement Orderbook, so you can find the logic in orderbook.js.


**Accomplishments:**

**1. Peer Node Implementation:**
   - A Peer Node has been successfully implemented to handle orders.
   - Orders submitted by clients are distributed among Peer Nodes using Grenache.

**2. Lock Service:**
   - A basic Lock Service has been integrated to manage locks. However, it's crashing so the code is there but it is excluded from the peer-node.js

**3. Testing:**
   - Basic testing has been conducted, including order submission and distribution.

**Pending Items:**

**1. Order Matching:**
   - Detailed order matching logic needs to be implemented. The current code handles order distribution, but specifics on matching and processing remain pending. However, I have added the order-matching algorithm in the zip file as well. 

**2. Concurrency and Race Conditions:**
   - The challenge mentions being cautious about race conditions. Further evaluation and potential enhancements are required to ensure the system handles concurrency effectively.

**3. Comprehensive Testing:**
   - While basic testing has been conducted, a more comprehensive set of tests is needed to cover various scenarios, potential matches, and the behavior of the lock service.

** Potential Improvements with Additional Time:**

**1. Enhanced Order Matching Algorithm:**
   - Given more time, an enhanced order-matching algorithm could be developed to optimize trade execution.

**2. Scalability Considerations:**
   - Evaluate and implement measures for scalability, especially in scenarios with a high volume of orders.

**3. Logging and Monitoring:**
   - Implement robust logging and monitoring mechanisms to facilitate debugging and system performance analysis.


