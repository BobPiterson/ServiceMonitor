import {arrayBufferToASCII} from "../utils/arrayBufferToASCII";

export const packRsaPublicKey = async (key: CryptoKey): Promise<string> => {
    return arrayBufferToASCII(await window.crypto.subtle.exportKey(
        "spki",
        key
    ))
}