import { mnemonicToEntropy } from 'bip39';


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


