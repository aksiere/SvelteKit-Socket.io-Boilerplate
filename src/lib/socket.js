import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
const url = 'http://localhost:3000'

export const socket = io(url)