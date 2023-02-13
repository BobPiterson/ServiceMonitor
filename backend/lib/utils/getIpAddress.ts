import {Request} from "express";

export function getIpAddress(req: Request) {
    return `${req.headers['x-forwarded-for'] || req.socket.remoteAddress}:${req.headers['x-forwarded-port'] || req.socket.remoteAddress}`
}