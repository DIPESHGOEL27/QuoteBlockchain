import React, { useState } from 'react';
import QuoteForm from './QuoteForm';
import QuoteDisplay from './QuoteDisplay';
import ThirdPartyQuoteDisplay from './ThirdPartyQuoteDisplay';
import QuoteDisplayBlockchain from './QuoteDisplayBlockchain';

const QuoteOptions = () => {
  const [option, setOption] = useState("");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <h2>Choose an option:</h2>
      <select value={option} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="enter">Post Quote to MongoDB server or Blockchain</option>
        <option value="ownServer">Get Quote from our MongoDB Server</option>
        <option value="blockchain">Get Quotes from Blockchain</option>
        <option value="thirdParty">Get Quote from Third-Party API</option>
      </select>

      {option === 'enter' && <QuoteForm />}
      {option === 'ownServer' && <QuoteDisplay />}
      {option === 'blockchain' && <QuoteDisplayBlockchain />}
      {option === 'thirdParty' && <ThirdPartyQuoteDisplay />}
    </div>
  );
};

export default QuoteOptions;
