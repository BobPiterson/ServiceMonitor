import io, {Socket} from 'socket.io-client'
import {useContext, useEffect, useRef, useState} from "react";
import {ClientToServerEvents, ServerToClientEvents} from "../socketEvents/socketEvents";
import {AuthContext} from "../context/AuthContext";

interface useSocketParams {
    (
        roomId: number
    ): {}
}

export const useSocket: useSocketParams = (roomId) => {
    const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>()
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if (user.token) {
            socketRef.current = io({
                query: {authorization: user.token, roomId},
            })

            socketRef.current?.on("disconnect", (reason) => {
                console.log(reason)
            })

            return () => {
                // при размонтировании компонента выполняем отключение сокета
                socketRef.current?.disconnect()
            }
        }
    }, [roomId, user.token])

    return {}
}