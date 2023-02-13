import {encodeMessage} from "./encodeMessage";
import {arrayBufferToASCII} from "./arrayBufferToASCII";

export const SHA512 = async (message: string): Promise<string> => {
    return arrayBufferToASCII(await window.crypto.subtle.digest('SHA-512', encodeMessage(message)))
}