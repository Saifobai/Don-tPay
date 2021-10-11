const mongoose = require('mongoose');

var chatRoomSchema = new mongoose.Schema({
   article_id: {type: mongoose.SchemaTypes.ObjectId, ref: "article"},
   sender: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
   reciever: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
   messages: [{
      sender: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
      reciever: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
      message_body: {type: String},
      created_at: { type: Date, default: Date.now() },
      updated_at: { type: Date, default: Date.now() },
      read: {type: Boolean, default: false}
   }],
   created_at: { type: Date, default: Date.now() },
   updated_at: { type: Date, default: Date.now() },
});

const roomModel = new mongoose.model('chatroom', chatRoomSchema);

module.exports = roomModel;


