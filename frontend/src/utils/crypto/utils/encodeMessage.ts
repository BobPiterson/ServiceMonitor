export const encodeMessage = (message: string | ArrayBuffer | Uint8Array): ArrayBuffer | Uint8Array => {
    if (message instanceof ArrayBuffer || message instanceof Uint8Array) return message
    const enc = new TextEncoder();
    return enc.encode(message);
}