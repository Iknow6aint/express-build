const model = require('../models/friends.model')

function postFriend(req,res){

    if(!req.body.name){
       res.status(400).json({
            error: "missing name"
        });
    }
    const newFriends = {
        name: req.body.name,
        id: model.lenght
    }
    model.push(newFriends);

    res.json(newFriends);
}

function getFriends(req,res){
    res.json(friends)
}

function getFriend(req,res){
    const friendId = Number(req.params.friendId)
    const friend = model[friendId];
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(404).json({
            error:'friend not exist'
        })
    }
}

module.exports ={
    getFriends,
    getFriend,
    postFriend
}
