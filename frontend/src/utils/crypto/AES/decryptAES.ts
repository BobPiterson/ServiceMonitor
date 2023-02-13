import {decodeMessage} from "../utils/decodeMessage";

async function decryptAES(ciphertext: BufferSource, key: CryptoKey, iv: ArrayBuffer, decode: true): Promise<string>
async function decryptAES(ciphertext: BufferSource, key: CryptoKey, iv: ArrayBuffer, decode: false): Promise<ArrayBuffer>
async function decryptAES(ciphertext: BufferSource, key: CryptoKey, iv: ArrayBuffer, decode: boolean): Promise<string | ArrayBuffer> {
    const decryptedMessage = await window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        ciphertext
    )
    return decode ? decodeMessage(decryptedMessage) : decryptedMessage
}

export default decryptAES;