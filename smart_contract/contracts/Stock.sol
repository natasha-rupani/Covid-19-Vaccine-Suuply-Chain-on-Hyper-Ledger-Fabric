// SPDX-License-Identifier: MIT

pragma solidity ^0.7.1;

contract Stock {
    struct StockInfo {
        uint256 price;
        uint256 volume;
    }

    mapping(bytes4 => StockInfo) stockQuote;

    address oracleOwner;

    modifier onlyOwner() {
        require(
            msg.sender == oracleOwner,
            "Only owner can execute this action"
        );
        _;
    }

    constructor() public {
        oracleOwner = msg.sender;
    }

    function setStock(
        bytes4 symbol,
        uint256 price,
        uint256 volume
    ) public onlyOwner {
        StockInfo memory newStock = StockInfo(price, volume);
        stockQuote[symbol] = newStock;
    }

    function getStockPrice(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].price;
    }

    function getStockVolume(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].volume;
    }
}