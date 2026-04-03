// Select the database
use('honey_shop');

// Clear existing data
db.products.deleteMany({});

// Insert mock data for Products with stable ObjectIds and Supplier References
db.products.insertMany([
  { 
    "_id": ObjectId("66f300000000000000000001"),
    "item_id": 1, 
    "name": "Honey", 
    "origin": "China", 
    "price": 100.00, 
    "cost": 70.00, 
    "stock_level": 50,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000004"), // Frank Farm
    "description": "Original honey with a rich, sweet flavor, perfect for everyday use." 
  },
  { 
    "_id": ObjectId("66f300000000000000000002"),
    "item_id": 2, 
    "name": "FlowerHoney", 
    "origin": "Mexico", 
    "price": 150.00, 
    "cost": 100.00, 
    "stock_level": 30,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000001"), // Texas Organic Farm
    "description": "Delicate floral notes with a smooth, sweet taste." 
  },
  { 
    "_id": ObjectId("66f300000000000000000003"),
    "item_id": 3, 
    "name": "RoseHoney", 
    "origin": "India", 
    "price": 220.00, 
    "cost": 150.00, 
    "stock_level": 20,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000005"), // Sunflower Farm
    "description": "Distinctive rose aroma with a rich, full-bodied flavor." 
  },
  { 
    "_id": ObjectId("66f300000000000000000004"),
    "item_id": 4, 
    "name": "SunflowerHoney", 
    "origin": "Turkey", 
    "price": 300.00, 
    "cost": 200.00, 
    "stock_level": 25,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000005"), // Sunflower Farm
    "description": "Bright and cheerful with a mild, nutty taste." 
  },
  { 
    "_id": ObjectId("66f300000000000000000005"),
    "item_id": 5, 
    "name": "AcaciaHoney", 
    "origin": "Italy", 
    "price": 400.00, 
    "cost": 250.00, 
    "stock_level": 15,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000006"), // Bee Happy Honey
    "description": "Clear and light with a delicate floral scent and subtle sweetness." 
  },
  { 
    "_id": ObjectId("66f300000000000000000006"),
    "item_id": 6, 
    "name": "WildflowerHoney", 
    "origin": "Spain", 
    "price": 500.00, 
    "cost": 300.00, 
    "stock_level": 10,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000003"), // Older Farm Produce
    "description": "Complex and robust with a variety of floral notes and a rich, full-bodied flavor." 
  },
  { 
    "_id": ObjectId("66f300000000000000000007"),
    "item_id": 7, 
    "name": "CloverHoney", 
    "origin": "USA", 
    "price": 250.00, 
    "cost": 180.00, 
    "stock_level": 40,
    "unit": "jars",
    "supplier_id": ObjectId("66f100000000000000000002"), // Honey Been Factory
    "description": "Sweet, mild flavor with a hint of floral scent." 
  },
  { 
    "_id": ObjectId("66f300000000000000000008"),
    "item_id": 8, 
    "name": "Special Gift Box", 
    "origin": "Mixed", 
    "price": 1200.00, 
    "cost": 800.00, 
    "stock_level": 5,
    "unit": "boxes",
    "supplier_id": ObjectId("66f100000000000000000001"), // Texas Organic Farm
    "description": "A curated collection of our finest honeys in a beautiful gift box." 
  }
]);

console.log('Products collection initialized with Supplier references.');

// Example Aggregation: Find all products and join with supplier info
db.products.aggregate([
  {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id",
      foreignField: "_id",
      as: "supplier_info"
    }
  },
  { $unwind: "$supplier_info" },
  {
    $project: {
      name: 1,
      price: 1,
      "supplier_name": "$supplier_info.name",
      "supplier_origin": "$supplier_info.origin"
    }
  }
]).pretty();
