
import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js';
import accountController from '../controllers/account.controller.js'

const route = express.Router()

/*
  - Post  api/accounts/
  - Create a new account 
  - Protected Route
*/
route.post("/", authMiddleware.authMiddleware, accountController.createAccountController )





export default route;
