import {arrayBufferToASCII} from "../utils/arrayBufferToASCII";

export const exportRSAKeyPair = async (keyPair: CryptoKeyPair): Promise<{ publicKey: string, privateKey: string }> => {
    const exportedPublic = await window.crypto.subtle.exportKey(
        "spki",
        keyPair.publicKey
    );
    const exportedPrivate = await window.crypto.subtle.exportKey(
        "pkcs8",
        keyPair.privateKey
    );
    return {
        publicKey: `-----BEGIN PUBLIC KEY-----\n${arrayBufferToASCII(exportedPublic)}\n-----END PUBLIC KEY-----`,
        privateKey: `-----BEGIN PRIVATE KEY-----\n${arrayBufferToASCII(exportedPrivate)}\n-----END PRIVATE KEY-----`
    }
}