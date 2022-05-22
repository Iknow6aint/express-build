const express = require ('express')


const  messageControllers = require('../controllers/message.controllers')
const messageRoute = express.Router()


messageRoute.post('/',messageControllers.postMessage)
messageRoute.get('/',messageControllers.getMessages)


module.exports = messageRoute;
