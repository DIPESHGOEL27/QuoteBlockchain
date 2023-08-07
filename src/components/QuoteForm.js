import React, { useState } from 'react';
import axios from 'axios';
import './QuoteForm.css'; // Import the CSS file
import { ethers } from 'ethers';
import ABI from './abi.json'; // Import the ABI from the JSON file

const QuoteForm  =  () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [storageOption, setStorageOption] = useState('database'); // Default to database

  const handleFormSubmit = async (event) => {
    event.preventDefault();

  const newQuote = {
    quote: quote,
    author: author,
  };

  if (storageOption === 'database') {
    // Store in MongoDB
    // Replace 'http://localhost:5050' with your backend server URL
    axios.post('http://localhost:5050/quote', newQuote)
      .then((response) => {
        console.log('Quote successfully added:', response.data);
        // Handle any additional logic here after successfully adding the quote
        setQuote('');
        setAuthor('');
      })
      .catch((error) => {
        console.error('Error adding quote:', error);
        // Handle error state or display error message to the user
      });
    
    } else if (storageOption === 'blockchain') {
      // Store in the blockchain
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contractAddress = '0x9bA006d54Ac8637F866e02036F5D7012B85fD242';
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ABI, signer);

      try {
        await contract.addQuote(quote, author);
        console.log('Quote successfully added to Polygon blockchain');
        setQuote('');
        setAuthor('');
      } catch (error) {
        console.error('Error adding quote to Polygon blockchain:', error);
      }
    }
  };

  const handleToggleStorage = () => {
    // Toggle storage option between 'database' and 'blockchain'
    setStorageOption(prevStorageOption =>
      prevStorageOption === 'database' ? 'blockchain' : 'database'
    );
  };

  return (
    <form className="quote-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="quote-input"
        placeholder=" Enter Quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required
      />
      <br/>
      <input
        type="text"
        className="author-input"
        placeholder="Enter Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <br/>
      <button type="submit" className="GetQuoteButton">
        {storageOption === 'database' ? 'Submit Quote to Database' : 'Submit Quote to Blockchain'}
      </button>&nbsp;
      <button onClick={handleToggleStorage} className='GetQuoteButton'>
            Change to {storageOption === 'database' ? 'Blockchain' : 'MongoDB'} Server
      </button>
    </form>
  );
};

export default QuoteForm;
