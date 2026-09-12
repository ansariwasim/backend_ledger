//   Create server

import express from'express'
import authRoute from '../src/routes/auth.route.js'
import cookieParser from 'cookie-parser'
const app = express()


// middleware
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute )


export default app;