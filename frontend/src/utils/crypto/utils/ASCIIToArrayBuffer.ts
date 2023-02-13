import {str2ab} from "./str2ab";

export const ASCIIToArrayBuffer = (str: string): ArrayBuffer => {
    return str2ab(window.atob(str))
}