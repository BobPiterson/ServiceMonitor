import * as crypto from "crypto";
import {tokenKey} from "../app";

interface userType {
    id: number
}

export const makeJWTService = (user: userType): string => {
    let head = Buffer.from(JSON.stringify({alg: 'HS256', typ: 'jwt'})).toString('base64')
    let body = Buffer.from(JSON.stringify(user)).toString('base64')
    let signature = crypto
        .createHmac('SHA256', tokenKey)
        .update(`${head}.${body}`)
        .digest('base64')

    return `${head}.${body}.${signature}`
}