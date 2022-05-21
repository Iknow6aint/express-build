const express = require ('express')



const messageRoute = express()
const  messageControllers = require('../controllers/message.controllers')

messageRoute.get('/',messageControllers.getMessage)


module.exports = messageRoute;
