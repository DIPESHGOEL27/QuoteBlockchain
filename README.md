# Quote on Blockchain Web Application

This is a full-stack web application that allows users to store and retrieve quotes. The application provides three options: entering a new quote, getting quotes from a local server, and getting quotes from a third-party API. The quotes can be stored either in a MongoDB database or on the blockchain using a Solidity smart contract.

## Features

- Enter a new quote along with the author's name.
- Get quotes from a local server.
- Get random quotes from a third-party API.
- Choose to store quotes in a MongoDB database or on the blockchain.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js, MongoDB
- **Blockchain**: Ethereum, Solidity
- **Smart Contract Interaction**: ethers.js

## Usage

1. Install Dependencies: In both the frontend and backend directories, run `npm install` to install the required dependencies.

2. Configure Backend: Set up your MongoDB connection in `server.js` and ensure your MongoDB instance is running.

3. Run Backend: In the backend directory, run `npm start` to start the Express server.

4. Configure Frontend: Update the API URLs in `QuoteForm.js` and `QuoteDisplay.js` to match your backend server's URL.

5. Run Frontend: In the frontend directory, run `npm start` to start the React app.

6. Choose Storage Option: In the app, select your desired storage option (MongoDB or Blockchain) to store quotes.

7. Use the App: Enter new quotes, fetch quotes from the server or third-party API, and view quotes stored in your chosen storage medium.

## Blockchain Integration

To store quotes on the blockchain, the application utilizes a Solidity smart contract. The contract allows adding and retrieving quotes using Ethereum or compatible networks. Users can choose to store quotes either in a MongoDB database or on the blockchain.

The `contracts/QuoteStorage.sol` file contains the Solidity smart contract code. Users can interact with the contract using the deployed contract address and ABI. The `QuoteDisplayBlockchain.js` component in the frontend displays quotes stored on the blockchain.

## Deployment

- **Frontend**: Deploy the React app using platforms like Netlify, Vercel, or GitHub Pages.
- **Backend**: Deploy the Express server to a hosting platform like Heroku.

For the blockchain part, deploy the Solidity smart contract on Ethereum-compatible networks like Ethereum or Polygon. Use Remix, Truffle, or Hardhat for deployment.

## Note

This project is meant for educational purposes and demonstrates the integration of React, Express, MongoDB, and Ethereum-compatible blockchains. Additional security measures and optimizations should be implemented for production use.

