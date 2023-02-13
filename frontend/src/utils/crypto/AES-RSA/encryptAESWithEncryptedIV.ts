import {encryptAES} from "../AES/encryptAES";
import {encryptRSA} from "../RSA/encryptRSA";

export const encryptAESWithEncryptedIV = async (message: string | ArrayBuffer, keyAES: CryptoKey, keyRSA: CryptoKey): Promise<[ArrayBuffer, ArrayBuffer]> => {
    const [encrypted, iv] = await encryptAES(message, keyAES)
    const encryptedIV = await encryptRSA(iv, keyRSA)
    return [encrypted, encryptedIV]
}