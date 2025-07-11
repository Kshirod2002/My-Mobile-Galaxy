
class Product {
  constructor({ name, price, brand, color, specs, image }) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.color = color;
    this.specs = {
      ram: specs?.ram || "",
      storage: specs?.storage || "",
      camera: specs?.camera || "",
      battery: specs?.battery || "",
    };
    this.image = image;
    this.createdAt = new Date();
  }
}

module.exports = Product;
