import {Server} from "socket.io"
import http from "http"
import express from "express"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: true, // Allow all origins since we're serving frontend from same origin
        credentials: true
    }
})

export const getRecieverSocketId = (userId)=>{
    return userSocketMap[userId];
}

const userSocketMap = {};

io.on("connection",(socket)=>{
    console.log("A user Connected ",socket.id);
    const userId = socket.handshake.query.userId

    if(userId) userSocketMap[userId] = socket.id

    io.emit("getOnlineUsers",Object.keys(userSocketMap))


    socket.on("disconnect",()=>{
        console.log("A user disconnected ",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })}
)




export {io,server,app};