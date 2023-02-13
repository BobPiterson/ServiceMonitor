import * as crypto from "crypto";

export const generateUniqueId = () => crypto.randomBytes(16).toString("hex");