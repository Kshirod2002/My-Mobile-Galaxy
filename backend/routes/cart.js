const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add-to-cart", cartController.addToCart);
router.get("/cart/:userId", cartController.getCart);
router.delete("/cart/:userId/:productId", cartController.removeFromCart);

module.exports = router;
 