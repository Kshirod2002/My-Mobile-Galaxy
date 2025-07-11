const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const upload = require("../uploads");
const fs = require("fs");

dotenv.config();
const uri = process.env.MONGO_URL;
let client;

async function connectClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
}


exports.add = [
  upload.single("image"), 
  async (req, res) => {
    try {
      await connectClient();
      const db = client.db("mobile_galaxy");
      const products  = db.collection("products");

      const productData = {
        name: req.body.name,
        price: parseInt(req.body.price),
        brand: req.body.brand,
        color: req.body.color,
        image:req.body.image,
        specs: {
          ram: req.body.ram,
          storage: req.body.storage,
          camera: req.body.camera,
          battery: req.body.battery,
        },
        owner: req.userId || "admin", 
      };

      if (req.file) {
        productData.image = {
         // url: req.file.path,
          url: `/uploads/${req.file.filename}`,
          filename: req.file.filename,
        };
      }

      const result = await products.insertOne(productData);
      res.status(201).json({ message: "Product added successfully", id: result.insertedId });
    } catch (err) {
      console.error("Product Add Error:", err.message);
      res.status(500).send("Server error");
    }
  },
];

exports.get = async (req, res) => {

  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const productCollection  = db.collection("products");

    const products = await productCollection.find({}).toArray();  
    res.status(200).json({ products });
  }catch (err) {
    console.error("Product Fetch Error:", err.message);
    res.status(500).send("Server error");
  }

}
exports.getOne = async (req, res) => {
    const { id } = req.params;
   // const updatedData = req.body;

  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const productCollection = db.collection("products");

    const result = await productCollection.findOne({ _id: new ObjectId(id) });
    if (!result) return res.status(404).json({ message: "Product not found." });
    
   res.status(200).json({ result });
  }catch (err) {
    console.error("Product Fetch One Error:", err.message);
    res.status(500).send("Server error");
  }

}
exports.update =  async (req, res) => {
  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const productCollection = db.collection("products");

    const { id } = req.params;
    const { name, price, brand, color } = req.body;

    const updateFields = {};
    if (name) updateFields.name = name;
    if (price) updateFields.price = parseFloat(price);
    if (brand) updateFields.brand = brand;
    if (color) updateFields.color = color;

    if (req.file) {
      updateFields.image = {
        url: `/uploads/${req.file.filename}`,
        filename: req.file.filename,
      };
    }

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: "No fields provided for update" });
    }

   
    const result = await productCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Product not found or no changes made" });
    }

    res.status(200).json({ message: "Product updated successfully." });
  } catch (err) {
    console.error("Product Update Error:", err.message);
    res.status(500).send("Server error");
  }
};

exports.delete = async (req, res) => {
 const { id } = req.params;

  try {
    await connectClient();
    const db = client.db("mobile_galaxy");
    const productCollection = db.collection("products");

    const result  = await productCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  }catch (err) {
    console.error("Product Delete Error:", err.message);
    res.status(500).send("Server error");
  }

}