import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import connectdb from './config/connectDB.js'
import router from './api/v1/routes/index.js'
const app = express()

// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/',router)
// init db


// handle errors


export default app