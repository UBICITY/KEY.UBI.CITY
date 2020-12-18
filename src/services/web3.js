import Web3 from 'web3';

const provider = new Web3.providers.WebsocketProvider(
  'wss://rpc.xdaichain.com/wss',
);

const web3 = new Web3(provider);

export default web3;