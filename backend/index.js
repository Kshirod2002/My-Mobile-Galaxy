require('dotenv').config();

const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const path = require("path");
const session = require("express-session");
const mainRouter = require("./routes/mainrouter.js")

const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require('./model/user.js'); 
const Cart = require("./model/cart.js");
const Product = require("./model/product.js");

const sessionOptions = {
  secret: "yourSecretKey",
  resave: false,
  saveUninitialized: false,
};

app.use(cors({
  origin: "https://my-mobile-galaxy-shop.onrender.com", 
  credentials: true
}));

app.use(express.json()); 
app.use(bodyParser.json());
app.use(session(sessionOptions));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", mainRouter);


const PORT = process.env.PORT || 8081;
const uri = process.env.MONGO_URL;


async function main() {
    await mongoose.connect(uri);
    console.log("Connected to DB");

app.listen(PORT, () => {
    console.log("Server is Starting on port 8081");
})
}
main().catch((err) => console.error("Connection failed:", err));


