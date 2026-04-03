// Select the database
use('honey_shop');

// Update Special Gift Box with embedded recipe/ingredients
db.products.updateOne(
  { "_id": ObjectId("66f300000000000000000008") },
  {
    $set: {
      "recipe": [
        { "product_id": ObjectId("66f300000000000000000001"), "name": "Honey", "quantity": 1 },
        { "product_id": ObjectId("66f300000000000000000002"), "name": "FlowerHoney", "quantity": 1 },
        { "product_id": ObjectId("66f300000000000000000003"), "name": "RoseHoney", "quantity": 1 },
        { "product_id": ObjectId("66f300000000000000000007"), "name": "CloverHoney", "quantity": 1 }
      ],
      "packaging": "Wooden Box with Silk Ribbon"
    }
  }
);

console.log('Special Gift Box updated with embedded recipe.');

// Query to show products with recipes
db.products.find({ "recipe": { $exists: true } }).pretty();
