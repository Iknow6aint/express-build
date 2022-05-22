const path = require('path')


function getMessages (req,res){

    res.sendFile(path.join(__dirname,'..','public','pascal.png'))
    // res.send('<ul>name and number</ul>')
}


function postMessage (req,res){
    console.log('updating...')
}


module.exports ={
    getMessages,
    postMessage
}