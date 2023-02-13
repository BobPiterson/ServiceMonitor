import crypto from "crypto";

export const SHA512 = (message: string) => crypto.createHash('sha512').update(message).digest('base64')