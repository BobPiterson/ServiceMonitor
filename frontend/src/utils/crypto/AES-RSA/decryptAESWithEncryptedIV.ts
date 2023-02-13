import decryptRSA from "../RSA/decryptRSA";
import decryptAES from "../AES/decryptAES";

async function decryptAESWithEncryptedIV(ciphertext: BufferSource, keyAES: CryptoKey, keyRSA: CryptoKey, iv: ArrayBuffer, decode: true): Promise<string>
async function decryptAESWithEncryptedIV(ciphertext: BufferSource, keyAES: CryptoKey, keyRSA: CryptoKey, iv: ArrayBuffer, decode: false): Promise<ArrayBuffer>
async function decryptAESWithEncryptedIV(ciphertext: BufferSource, keyAES: CryptoKey, keyRSA: CryptoKey, iv: ArrayBuffer, decode: boolean): Promise<string | ArrayBuffer> {
    const decryptedIV = await decryptRSA(iv, keyRSA, false)
    if (decode) {
        return decryptAES(ciphertext, keyAES, decryptedIV, true)
    } else {
        return decryptAES(ciphertext, keyAES, decryptedIV, false)
    }
}

export default decryptAESWithEncryptedIV