import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectDb } from './config/db.js'
import userRouter from './routers/routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))

app.use('/api',userRouter)

connectDb().
then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('This is Port' , process.env.PORT );
    })
})
