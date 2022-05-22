const express = require('express')

const friendsRoute = express.Router()
const friendControllers = require('../controllers/friends.controllers')

friendsRoute.use((req,res,next)=>{
    console.log('ip add',req.ip);
    next()
})
friendsRoute.post('/',friendControllers.postFriend)
friendsRoute.get('/',friendControllers.getFriends)
friendsRoute.get('/friends/:friendId',friendControllers.getFriend)


module.exports = friendsRoute;