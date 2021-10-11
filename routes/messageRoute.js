const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');
const passport = require('passport');


router.use(passport.authenticate('articleToken',{session: false})); 


// router.post('/send/:id', controller.sendMessage)

router.post('/sendmessage/:id/:owner', controller.writeMessage);

router.get('/showmessages', controller.showMessages)

router.get('/chatroom/:id/:reciever', controller.singleChatRoom)

router.post('/chatroom/replay/:id', controller.replayMessage)




module.exports = router;