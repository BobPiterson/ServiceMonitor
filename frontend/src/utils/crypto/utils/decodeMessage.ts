export const decodeMessage = (message: ArrayBuffer): string => {
    const enc = new TextDecoder();
    return enc.decode(message);
}