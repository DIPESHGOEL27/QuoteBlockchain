// QuoteStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuoteStorage {
    struct Quote {
        string content;
        string author;
    }

    Quote[] public quotes;

    function addQuote(string memory _content, string memory _author) public {
        quotes.push(Quote(_content, _author));
    }

    function getQuoteCount() public view returns (uint256) {
        return quotes.length;
    }

    function getQuote(uint256 index) public view returns (string memory content, string memory author) {
        require(index < quotes.length, "Invalid index");
        Quote memory requestedQuote = quotes[index];
        content = requestedQuote.content;
        author = requestedQuote.author;
    }
}
