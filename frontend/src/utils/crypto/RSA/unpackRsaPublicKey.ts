import {ASCIIToArrayBuffer} from "../utils/ASCIIToArrayBuffer";

export const unpackRsaPublicKey = async (key: string): Promise<CryptoKey> => {
    return await window.crypto.subtle.importKey(
        'spki',
        ASCIIToArrayBuffer(key),
        {
            name: 'RSA-OAEP',
            hash: 'SHA-512'
        },
        true,
        ["encrypt", "wrapKey"]
    )
}