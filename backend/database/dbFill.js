require('dotenv').config();
const Web3 = require('web3');
const async = require('async');
const mongoose = require('mongoose');

const Users = require('./models/users');
const Vaccine = require('./models/vaccine');

const randomGenerator = require('../utils/randomGenerator');
const initMongo = require('./connect');
const mongoURI = process.env.MONGODB_URI_DEV;

initMongo(mongoURI,true);
const addressJSON = require('../../smart_contract/build/contractAddress.json');
const contractJSON = require('../../smart_contract/build/contracts/SupplyChain.json');

const CONTRACT_ADDRESS = addressJSON.address;
const CONTRACT_ABI = contractJSON.abi;
const totalVaccines = 4;

async function initSmartContractData(){
    web3 = new Web3(process.env.BLOCKCHAIN_EMULATOR_URI);
    accounts = await web3.eth.getAccounts();
    contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS,{from:accounts[0]});

    admin = accounts[0];
    distributor = accounts[1];
    manufacturer = accounts[2];
    transporter = accounts[3];
}

function populateUsers(cb){
    async.series([
        (cb) => {
            createUser({
                name : "testAdmin",
                password: 123456,
                address: admin,
                userType: 1
            },cb)
        },
        (cb) => {
            createUser({
                name : "testDist",
                password: 123456,
                address: distributor,
                userType: 2
            },cb)
        },
        (cb) => {
            createUser({
                name : "testManu",
                password: 123456,
                address: manufacturer,
                userType: 3
            },cb)
        },
        (cb) => {
            createUser({
                name : "testTrans",
                password: 123456,
                address: transporter,
                userType: 4
            },cb)
        }
    ],cb);

}

function createUser({name,password,address,userType},cb){
    const newUser = new Users({name, password, address,userType});
    newUser.save(function(err){
        if(err){
            cb(err,null);
            return;
        }
        console.log("New User:"+newUser.name);
        if(userType === 2){
            contract.methods
            .addDistributor(address)
            .send({ from: admin })
            .then(() => {
                console.log(`Added distributor: ${address}`);
            })
            .catch(err => {
                console.log('Ooppss...addDistributor', err);
            })
        }
        if(userType === 3){
            contract.methods
            .addManufacturer(address)
            .send({ from: admin })
            .then(() => {
                console.log(`Added manufacturer: ${address}`);
            })
            .catch(err => {
                console.log('Ooppss... addManufacturer', err);
            })
        }
        if(userType === 4){
            contract.methods
            .addTransporter(address)
            .send({ from: admin })
            .then(() => {
                console.log(`Added transporter: ${address}`);
            })
            .catch(err => {
                console.log('Ooppss... addTransporter', err);
            })
        }
        cb(null, newUser);
    });
}
function createVaccine({serialNo,manufacturer,thermal},cb){
    const newVaccine = new Vaccine({serialNo,manufacturer,thermal});
    newVaccine.save(function(err){
        if(err){
            cb(err,null);
            return;
        }
        console.log("New Vaccine:"+newVaccine.serialNo);
        //cb(null, newVaccine);
    });
}
function populateVaccines(cb){
    let vaccineArray = [];
    for (let i = 0; i < totalVaccines; i++) {
        const manufacturerString = randomGenerator.randomString(10);
        const serialNo = randomGenerator.randomSerialNumber();
        const thermal = randomGenerator.randomInt(10, 20);
        vaccineArray.push(
            (cb) => {
                const location = randomGenerator.randomLocation();
                contract.methods.makeVaccine(
                    manufacturerString,
                    serialNo,
                    thermal,
                    location
                )
                .send({ from: manufacturer, gas: 500000 })
                .then(() => {
                    console.log(`Vaccine ${i} created`);
                    //add in mongodb also
                    createVaccine({
                        serialNo : serialNo,
                        manufacturer: manufacturerString,
                        thermal: thermal
                    },cb)
                })
                .catch(err => {
                    console.log(`OOppss...makeVaccine ${i}`, err);
                })
                .finally(() => cb())
            }
        )
    }
    async.series(vaccineArray, cb);
}

function orderVaccines(cb){
    let orderArr = [];
    for( let i = 0 ; i < totalVaccines ; i++){
        orderArr.push(
            (cb) => {
                contract.methods.orderVaccine(i).send({from:distributor}).then(() => {
                    console.log(`Vaccine ${i} ordered by distributor ${distributor}`);
                })
                .catch(e =>{
                    console.log(`OrderVaccine Function not working ${i}`, err);
                })
                .finally(() => cb())
            }
        )
    }
    async.series(orderArr,cb);
}

function transferVaccines(cb){
    let transferrArr = [];
    for(let i = 0 ; i<totalVaccines ; i++){
        transferrArr.push(
            (cb) => {
                contract.methods.transferVaccine(i,transporter,randomGenerator.randomInt(10, 20),
                randomGenerator.randomLocation()
                )
                .send({from : manufacturer})
                .then(() => {
                    console.log(`Vaccine ${i} is transfered to transporter ${transporter}`);
                })
                .catch(e => {
                    console.log(`transferVaccine function not working ${i}`, err);
                })
                .finally(() => cb())
            }
        )
    }
    async.series(transferrArr,cb);
}
async.series([
    initSmartContractData,
    populateUsers,
    populateVaccines,
    orderVaccines,
    transferVaccines
    ],
    function (err) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Success');
        }
        mongoose.connection.close();
    });