const express = require("express");
const router = express.Router();
const upload  = require("../uploads");
const productController = require("../controllers/productController");

router.post("/add", productController.add);
router.get("/products", productController.get);
router.get("/products/:id", productController.getOne);
router.put("/products/:id", upload.single("image"), productController.update);
router.delete("/products/:id", productController.delete);

module.exports = router;
 