import {encodeMessage} from "../utils/encodeMessage";

export const encryptRSA = async (message: string | ArrayBuffer, key: CryptoKey): Promise<ArrayBuffer> => {
    return window.crypto.subtle.encrypt(
        {
            name: 'RSA-OAEP'
        },
        key,
        encodeMessage(message)
    )
}