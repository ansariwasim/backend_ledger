
import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
const route = express.Router()


/*
- Post /api/transactions/
- Create a new transaction

*/
route.post("/", authMiddleware.authMiddleware,  )



export default route;