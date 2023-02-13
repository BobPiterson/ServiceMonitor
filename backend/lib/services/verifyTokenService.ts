import crypto from "crypto";
import {tokenKey} from "../app";

export const verifyTokenService = (auth: string): string => {
    try {
        if (auth) {
            const tokenParts = auth.split('.')
            const signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${tokenParts[0]}.${tokenParts[1]}`)
                .digest('base64')

            if (signature === tokenParts[2]) {
                return JSON.parse(Buffer.from(tokenParts[1], 'base64').toString('utf8'))
            }
        }
    } catch (e) {
    } finally {
    }
    return ''
}