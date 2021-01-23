import { mnemonicToEntropy, entropyToMnemonic } from 'bip39';

// import web3 from './web3'

// export function getKey() {
//   var xxx = web3.eth.accounts.create();
//   console.log('xxxx =',xxx)
//   const { privateKey } = xxx;
//   return privateKey;
// }

export function fromSeedPhrase(seedPhrase) {
  try {
    const restoredKey = mnemonicToEntropy(seedPhrase);
    const privateKey = `0x${restoredKey}`;
    if (!privateKey) {
      throw new Error('Invalid private key');
    }
    return privateKey
  } catch (error) {
    throw new Error(error.message)
  }
}

export function toSeedPhrase(privateKey) {
  return entropyToMnemonic(privateKey.slice(2)).split(' ');
}
