export const wrapAESKey = async (key: CryptoKey, wrappingKey: CryptoKey): Promise<ArrayBuffer> => {
    return window.crypto.subtle.wrapKey(
        "raw",
        key,
        wrappingKey,
        "RSA-OAEP"
    )
}