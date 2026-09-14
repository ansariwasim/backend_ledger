//   Create server

import express from'express'
import cookieParser from 'cookie-parser'
const app = express()


// Import  Routes 
import authRoute from '../src/routes/auth.route.js'
import accoutRoute from '../src/routes/account.route.js'


// middleware
app.use(express.json())
app.use(cookieParser())



//  
app.use("/api/auth", authRoute )
app.use("/api/accounts", accoutRoute)


export default app;