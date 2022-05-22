const express = require('express')
const path = require('path')

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

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'));

app.use('/site',express.static(path.join(__dirname,'public')))
app.use (express.json())


app.use('/',(req,res)=>{
    res.render('index',{
        caption: 'HELLO GAY NIGGAS'
    })
})
app.use('/friends',friendsRoute)
app.use('/messages',messageRoute)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

