const express = require('express')


const  messageControllers = require('./controllers/message.controllers')
const friendControllers = require('./controllers/friends.controllers')

const app = express()

const PORT = 3000




app.use((res,req,next)=>{
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/friends',friendControllers.postFriend)


app.get('/friends',friendControllers.getFriends)

app.get('/friends/:friendId',friendControllers.getFriend)

app.get('/message',messageControllers.getMessage)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

