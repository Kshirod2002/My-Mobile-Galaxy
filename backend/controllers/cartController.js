const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");

dotenv.config();
const uri = process.env.MONGO_URL;
let client;

async function connectClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
}

// POST /add-to-cart
exports.addToCart = async (req, res) => {
  let { userId, product } = req.body;

  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const cartCollection = db.collection("carts");

    // Ensure each product has a unique productId
    if (!product.productId) {
      product.productId = uuidv4();
    }

    const existingCart = await cartCollection.findOne({ userId });

    if (existingCart) {
      const itemIndex = existingCart.items.findIndex(
        (item) => item.productId === product.productId
      );

      if (itemIndex > -1) {
        existingCart.items[itemIndex].quantity += product.quantity;
      } else {
        existingCart.items.push(product);
      }

      await cartCollection.updateOne(
        { userId },
        { $set: { items: existingCart.items } }
      );
    } else {
      await cartCollection.insertOne({
        userId,
        items: [product],
      });
    }

    res.status(200).json({ message: "Product added to cart!", productId: product.productId });
  } catch (err) {
    console.error("Cart Add Error:", err.message);
    res.status(500).send("Server error");
  }
};

// GET /cart/:userId
exports.getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const cartCollection = db.collection("carts");

    const cart = await cartCollection.findOne({ userId });

    if (!cart) return res.status(200).json({ items: [] });

    res.status(200).json(cart);
  } catch (err) {
    console.error("Cart Fetch Error:", err.message);
    res.status(500).send("Server error");
  }
};

// DELETE /cart/:userId/:productId
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const cartCollection = db.collection("carts");

   const result = await cartCollection.updateOne(
  { userId },
  { $pull: { items: { productId: productId.toString() } } }
);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Product not found in cart." });
    }

    res.status(200).json({ message: "Item removed from cart." });
  } catch (err) {
    console.error("Remove Error:", err.message);
    res.status(500).send("Server error");
  }
};


