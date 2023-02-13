import {ab2str} from "./ab2str";

export const arrayBufferToASCII = (buffer: ArrayBuffer): string => {
    return window.btoa(ab2str(buffer))
}