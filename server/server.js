import app from './src/app.js'
import 'dotenv/config'
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

process.on('SIGINT', () => {
    server.close( () => console.log('Server closed'))
})