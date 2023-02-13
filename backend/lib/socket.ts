import {Server, Socket} from "socket.io";
import {Server as HttpServer} from 'http'
import {ClientToServerEvents, ServerToClientEvents} from "./socketEvents/socketEvents";
import {socketOnConnection} from "./socketEvents/socketOnConnection";

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    roomId: string
    userId: string
    username: string
}

export type SocketType = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export const createSocket = (server: HttpServer) => {
    const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
        // cors: {
        //   origin: '*'
        // }
    });
    io.on('connection', socketOnConnection)
}

