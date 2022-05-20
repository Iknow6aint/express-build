const express = require('express')

const app = express()

const PORT = 3000

const friends =[
    {
        id: '0',
        name: 'fred',
    },
    {
        id: '1',
        name: 'divine',
    }
]


app.use((res,req,next)=>{
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/friends',(req,res)=>{

    if(!req.body.name){
       res.status(400).json({
            error: "missing name"
        });
    }
    const newFriends = {
        name: req.body.name,
        id: friends.lenght
    }
    friends.push(newFriends);

    res.json(newFriends);
})


app.get('/friends',(req,res)=>{
    res.json(friends)
})

app.get('/friends/:friendId',(req,res)=>{
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(404).json({
            error:'friend not exist'
        })
    }
})

app.post('/message',(req,res) =>{
    console.log('updating...')
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

