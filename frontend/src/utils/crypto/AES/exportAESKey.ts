import {arrayBufferToASCII} from "../utils/arrayBufferToASCII";

export const exportAESKey = async (key: CryptoKey): Promise<string> => {
    const exported = await window.crypto.subtle.exportKey(
        "raw",
        key
    );
    return `[${arrayBufferToASCII(exported)}]`
}