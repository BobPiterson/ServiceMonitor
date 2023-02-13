import {encodeMessage} from "../utils/encodeMessage";

export const encryptAES = async (message: string | ArrayBuffer, key: CryptoKey): Promise<[ArrayBuffer, Uint8Array]> => {
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    return [
        await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM', iv: iv
            },
            key,
            encodeMessage(message)
        ),
        iv
    ]
}