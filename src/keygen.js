const EC = require('elliptic').ec;
const ec = new EC('p192');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log("Private Key : " + privateKey);
console.log("\nPublic Key : " + publicKey);