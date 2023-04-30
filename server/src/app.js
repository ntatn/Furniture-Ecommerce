import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import connectdb from './config/connectDB.js'
import router from './api/v1/routes/index.js'
import cors from "cors"
const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(cors({
    origin: '*'
}))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/', router)
// init db


// handle errors

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: err.message || 'Internal Server Error'
    })
})

export default app