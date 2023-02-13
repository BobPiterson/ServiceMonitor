export const unwrapAESKey = async (wrappedKey: ArrayBuffer, unwrappingKey: CryptoKey): Promise<CryptoKey> => {
    return window.crypto.subtle.unwrapKey(
        "raw",
        wrappedKey,
        unwrappingKey,
        "RSA-OAEP",
        "AES-GCM",
        true,
        ['encrypt', 'decrypt']
    )
}