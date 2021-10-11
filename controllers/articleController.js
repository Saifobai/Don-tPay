const articleModel = require('../models/articleModel');
const imageModel = require('../models/imageArticleModel');
const userModel = require('../models/userModel');
const multer = require('multer')


//  to add an article from the user 
// need to add image upload code 
exports.add = async (req, res) => {

    try {
        const user = await userModel.findById(req.body.user_id);
        if (user == null) {
            res.status(400).json({ message: 'user not found' });
        } else {
            const article = await articleModel.create({
                user_id: req.body.user_id,
                articlename: req.body.articlename,
                description: req.body.description,
                status: req.body.status.toLowerCase(),
                articleimage: req.body.articleimage,
                note: req.body.note,
                quantity: req.body.quantity,
                category: req.body.category.toLowerCase()
            })
            
            return res.status(200).json({ message: "article added successfully", article: article })
        }
    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}


//  to edit an article from the user 
exports.update = async (req, res) => {
    const article = await articleModel.findById(req.body.id)
    if (article === null) {
        res.status(404).json({ message: "Article not found" })
    }
    try {
        const articleUpdated = await articleModel.findByIdAndUpdate(req.body.id, {
            articlename: req.body.articlename,
            description: req.body.description,
            status: req.body.status,
            note: req.body.note,
            quantity: req.body.quantity,
            category: req.body.category,
        }, { new: true })
        await imageModel.findByIdAndUpdate(articleUpdated.articleimage_id, {
            imagename: req.body.imagename,
        })
        res.status(200).json({ message: "article updated successfully", article: articleUpdated })
    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}


// remove items need to check not finished yet 

exports.removearticle = async (req, res) => {
    try {
        const article = await articleModel.findById(req.params.id);
        console.log(req.user._id, article.user_id)
        if (req.user._id.toString() == article.user_id.toString()) {
            await articleModel.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "the article has been deleted" })
        }
        return res.status(400).json({ message: "you are not allowed to delete" })
    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}

// review article 
exports.categorieslist = async (req, res) => {
    try {
        const categories = await articleModel.schema.path("category").enumValues;
        const status = await articleModel.schema.path("status").enumValues;

        return res.status(200).json({ message: "All Article", categories: categories, status: status })

    } catch (error) {
        return res.status(400).json({ message: "error happend" })
    }
}

exports.category = async (req, res) => {
    try {
        const articles = await articleModel.find({ category: req.params.category }).populate("user articleimage_id");
        return res.status(200).json({ message: "All Article", articles: articles })
    } catch (error) {
        return res.status(400).json({ message: "error happend" })
    }
}

exports.article = async (req, res) => {
    try {
        const article = await articleModel.findById(req.params.article).populate("user_id");
        const address = article.user_id.address;
        return res.status(200).json({ message: "signle Article", article: article, address: address });
    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message })
    }
}

exports.newArticle = async (req, res) => {
    try {
        const articles = await articleModel.find().populate("user_id")
            .limit(24)
            .sort('-created');

        const allArticles = await articleModel.find().populate("user_id")
            .sort('-created');

        return res.status(200).json({ message: "last article found", articles: articles, allArticles: allArticles });
    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message })
    }
}






// new from saif multer



const multerConfig = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'uploads/articleimages/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    },
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    } else {
        callback(new Error('Only Image is Allowed..'));
    }
}


const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

exports.uploadImage = upload.single('photo')



exports.upload = (req, res) => {

    res.status(200).json({success: 'Success', articleimage: req.file.filename});
}

exports.getImage = async (req, res) => {

    try {
        const article = await articleModel.findById(req.params.id);

        console.log(article)


        res.sendFile(`${__dirname}/uploads/articleimages/${article.articleimage}`);
    } catch (error) {
        console.log(error)
    }
}

