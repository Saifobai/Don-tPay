const { Mongoose } = require('mongoose');
const roomModel = require('../models/roomModel');
const userModel = require('../models/userModel');


exports.writeMessage = async (req, res) => {

    try {
        const owner = await userModel.findById(req.params.owner); // saif

        let articleRoom = await roomModel.findOne({ article_id: req.params.id, sender: req.user._id }); // mohamad
        // let articleRoom = await roomModel.findOne({ _id: Mongoose.Types.ObjectId(req.params.room)}); // mohamad
        
        // const partnerID = null;

        // if(articleRoom.reciever == req.user._id){
        //     partnerID = articleRoom.sender;
        // } else if(articleRoom.sender == req.user._id) {
        //     partnerID = articleRoom.reciever;
        // }

        if (articleRoom !== null) {
            console.log(articleRoom.reciever._id);
            articleRoom = await roomModel.findOneAndUpdate({ article_id: req.params.id, $or:[{ reciever: owner }, { sender:owner}] },
                {
                    $push: {
                        messages: {
                            sender: req.user._id,
                            reciever: owner,
                            message_body: req.body.message
                        }
                    }
                }, { new: true }
            )
        } else {
            articleRoom = await roomModel.create({
                article_id: req.params.id,
                sender: req.user._id,
                reciever: req.params.owner,
                messages: [{
                    sender: req.user._id,
                    reciever: owner,
                    message_body: req.body.message
                }]
            });
        }
        return res.status(200).json({ note: "message has been sent", message: articleRoom });
    } catch (error) {
        res.status(500).json({ message: "error happens here", error: error.message })
    }
}

exports.showMessages = async (req, res) => {

    try {
        const messages = await roomModel.find({ $or:[{ reciever: req.user._id }, { sender: req.user._id}]}).populate({path:"article_id messages sender reciever", populate: {path: "sender reciever"}});
                                                           
       return res.status(200).json({ messages: messages });

    } catch (error) {
       return res.status(500).json({ message: "error happens here", error: error.message })
    }
}

exports.singleChatRoom = async (req, res) => {

    try {

        const chat = await roomModel.findOne({ article_id : req.params.id, $or:[{ reciever: req.user._id }, { sender:req.user._id}]}).populate({path:"article_id messages sender reciever", populate: {path: "sender reciever user_id"}});

        return res.status(200).json({ messages: "single chat room", chat: chat.messages,id: chat._id });
        
    } catch (error) {
        
       return res.status(500).json({ message: "error happens here", error: error.message })
        
    }
}

exports.replayMessage = async (req, res) => {
    try {

        const articleRoom = await roomModel.findByIdAndUpdate(req.params.id,
                {
                    $push: {
                        messages: {
                            sender: req.user._id,
                            reciever: req.body.owner,
                            message_body: req.body.message,
                            created_at: Date.now()
                        }
                    }
                }, { new: true }
            )
        return res.status(200).json({ note: "message send success", message: articleRoom });
    } catch (error) {
        res.status(500).json({ message: "error happens here", error: error.message })
    }

}

// exports.showMessages = async (req, res) => {

//     try {
//         const articleRooms = await roomModel.findOne({ article_id: req.params.id, $or:[{ reciever: req.params.owner }, { sender: req.params.owner},{ reciever: req.user._id }, { sender:req.user._id}]}).populate({path:"messages", populate: {path: "sender"}});
                                                                            
//         res.status(200).json({ articleRoom: articleRooms.messages, room: articleRooms });

//     } catch (error) {
//         res.status(500).json({ message: "error happens here", error: error.message })
//     }
// }