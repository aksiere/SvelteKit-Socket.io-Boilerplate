import { createServer } from 'http'
import { Server } from 'socket.io'

const server = createServer()
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173'
	}
})

io.on('connection', (socket) => {
	console.log('user connected')
	
	socket.on('test', () => {
		console.log('test')
	})
})

server.listen(3000)