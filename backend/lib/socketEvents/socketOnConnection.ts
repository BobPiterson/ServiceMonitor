import {verifyTokenService} from "../services/verifyTokenService";
import {SocketType} from "../socket";

export const socketOnConnection = (socket: SocketType) => {
    socket.on('disconnect', (reason) => {
        console.log(`user disconnected '${reason}'`)
    })
    const user = verifyTokenService(socket.handshake.query.authorization as string)
    if (user &&
        typeof socket.handshake.query.roomId === 'string') {
        socket.data.username = user
        socket.data.roomId = socket.handshake.query.roomId
    } else {
        console.log(`Wrong token`)
        return socket.disconnect()
    }

    console.log(`user connected ${socket.handshake.query.roomId}`)
}