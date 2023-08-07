import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './QuoteDisplay.css'; // Import the CSS file

const QuoteDisplayBlockchain = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const contractAddress = '0x9bA006d54Ac8637F866e02036F5D7012B85fD242';
  const contractABI = require('./abi.json'); // Import your contract ABI

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        const quotesCount = await contract.getQuoteCount();
        console.log('Quotes count:', quotesCount);

        const quotesArray = [];

        for (let i = 0; i < quotesCount; i++) {
          const quote = await contract.getQuote(i);
          quotesArray.push(quote);
        }

        setQuotes(quotesArray);
        setIsLoading(false); // Mark loading as false after quotes are fetched

      } catch (error) {
        console.error('Error fetching quotes:', error);
        setIsLoading(false); // Handle error and mark loading as false
      }
    }

    fetchQuotes();
  }, [contractABI]); // Empty dependency array, so it runs only once on component mount

  
  return (
    <div>
      <h3>Quotes from Blockchain</h3>
      {isLoading ? (
        <p>Loading quotes...</p> // Show loading state while fetching quotes
      ) : quotes.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        <ol className="quote-list">
          {quotes.map((quote, index) => (
            <li key={index} className="quote-item">
              <p className="quote-content">"{quote.content}"</p>
              <p className="quote-author">- {quote.author}</p>
              <hr className="quote-divider" /> {/* Add the divider */}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default QuoteDisplayBlockchain;
