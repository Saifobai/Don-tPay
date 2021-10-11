const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const authenticate = require('./passport-config');

const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

app.use(cors());
app.use(express.json());
authenticate(passport)
app.use(express.static(__dirname + '/uploads'));
app.use('/uploads', express.static('uploads'));


const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const messageRoutes = require("./routes/messageRoute");


app.use('/user', userRoutes);
app.use('/article', articleRoutes);
app.use('/message', messageRoutes);

// upload userRoute

// serve react frontend /client/build folder
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

console.log("Connecting to database. Put the kettle on while you wait... 🫖");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
  )
  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database did not connect! ☹️❌"));

app.listen(port, () => console.log("The server is listening on port 3001... 🐒"));
