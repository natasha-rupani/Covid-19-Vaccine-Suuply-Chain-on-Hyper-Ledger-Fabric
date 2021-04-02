const Web3 = require('web3');
const bigNumber = require('bignumber.js');

const addressJSON = require('../smart_contract/build/contractAddress.json');
const contractJSON = require('../smart_contract/build/contracts/SupplyChain.json');

const CONTRACT_ADDRESS = addressJSON.address;
const CONTRACT_ABI = contractJSON.abi;

let web3, contract;

(async () => {
    web3 = new Web3(process.env.BLOCKCHAIN_EMULATOR_URI);
    const accounts = await web3.eth.getAccounts();
    contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS, { from: accounts[0] });
})();

const connectWeb3 = {
    
}

module.exports = connectWeb3;