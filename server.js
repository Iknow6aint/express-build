const express = require('express')

const { json } = require('express/lib/response')

const app = express()

const PORT = 3000

const friendsRoute = require ('./routes/friends.routes')
const messageRoute = require('./routes/message.routes')



app.use((res,req,next)=>{
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use (express.json())

app.use('/friends',friendsRoute)
app.get('/message',messageRoute)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

