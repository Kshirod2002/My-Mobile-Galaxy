const express = require("express");
const userRouter = require("./user");
const cartRouter = require("./cart");
const productRouter = require("./product");

const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(cartRouter);
mainRouter.use(productRouter);

mainRouter.get("/", (req, res) => {
  res.send("Welcome!");
});

module.exports = mainRouter;