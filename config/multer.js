
const multer = require('multer');


exports.upload = multer({

    dest:__dirname + './../uploads/images',
    limit:{ fileSize:150000 }
});