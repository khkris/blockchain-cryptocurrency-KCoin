const {Blockchain, Block, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('p192');

const myKey = ec.keyFromPrivate('77370a6bffeaf181b7f633ec4385becca8a420aa9dbc8551');
const myWalletAddress = myKey.getPublic('hex'); 

const hisKey = ec.keyFromPublic('0439ef41723225675836c309fa6ccfd721843667103e9c2da7dc1ea3b8e4dd943d77c58f8a4ebd6fed0b3d1dc4e6e8825c','hex');
const hisWalletAddress = hisKey.getPublic('hex'); 

let KCoin = new Blockchain();

const trans1 = new Transaction(myWalletAddress, hisWalletAddress, 90);
trans1.signTransaction(myKey);
KCoin.addTransaction(trans1);

console.log("Starting the miner");
KCoin.minePendingTransactions(myWalletAddress);

console.log("Balance of K is " + KCoin.getAddressBalance(myWalletAddress));

//console.log(KCoin, null, 4);


