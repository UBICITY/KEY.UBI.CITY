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
    // && !web3.utils.isHexStrict(privateKey)
    if (!privateKey) {
      throw new Error('Invalid private key');
    }
    return privateKey
  } catch (error) {
    console.log(error.message)
    alert(`生成私钥失败,${error.message},请检查助记词输入是否正确`)
    return '尚未生成'
  }

  // const { address } = web3.eth.accounts.privateKeyToAccount(privateKey);
  // return address;
}

export function toSeedPhrase(privateKey) {
  return entropyToMnemonic(privateKey.slice(2)).split(' ');
}
