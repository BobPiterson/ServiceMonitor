export const ab2str = (buf: ArrayBuffer): string => {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(buf)));
}