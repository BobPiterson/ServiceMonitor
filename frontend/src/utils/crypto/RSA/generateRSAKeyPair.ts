export const generateRSAKeyPair = async (): Promise<CryptoKeyPair> => {
    return window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 4096, //can be 1024, 2048, or 4096
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: {name: "SHA-512"}, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
        true, //whether the key is extractable (i.e. can be used in exportKey)
        ["wrapKey", "unwrapKey", "encrypt", "decrypt"]
    )
}