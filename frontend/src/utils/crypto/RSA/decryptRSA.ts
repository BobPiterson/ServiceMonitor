import {decodeMessage} from "../utils/decodeMessage";

async function decryptRSA(ciphertext: BufferSource, key: CryptoKey, decode: true): Promise<string>;
async function decryptRSA(ciphertext: BufferSource, key: CryptoKey, decode: false): Promise<ArrayBuffer>;
async function decryptRSA(ciphertext: BufferSource, key: CryptoKey, decode: boolean): Promise<string | ArrayBuffer> {
    const decryptedMessage = await window.crypto.subtle.decrypt(
        {
            name: 'RSA-OAEP'
        },
        key,
        ciphertext
    )
    return decode ? decodeMessage(decryptedMessage) : decryptedMessage
}

export default decryptRSA