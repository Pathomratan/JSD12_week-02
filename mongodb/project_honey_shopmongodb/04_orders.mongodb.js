// Select the database
use('honey_shop');

// Clear existing data
db.orders.deleteMany({});

// Insert mock data for Orders with stable ObjectIds and Customer References
db.orders.insertMany([
  { 
    "_id": ObjectId("66f400000000000000000001"),
    "order_id": 1, 
    "order_date": new Date("2023-01-01T14:05:00Z"), 
    "customer_id": ObjectId("66f200000000000000000002"), // Bob Brown
    "total_price": 1150.00, 
    "items": [
      { "product_id": ObjectId("66f300000000000000000002"), "name": "FlowerHoney", "quantity": 1, "price": 150.00 },
      { "product_id": ObjectId("66f300000000000000000001"), "name": "Honey", "quantity": 1, "price": 100.00 },
      { "product_id": ObjectId("66f300000000000000000005"), "name": "AcaciaHoney", "quantity": 1, "price": 400.00 },
      { "product_id": ObjectId("66f300000000000000000006"), "name": "WildflowerHoney", "quantity": 1, "price": 500.00 }
    ]
  },
  { 
    "_id": ObjectId("66f400000000000000000002"),
    "order_id": 2, 
    "order_date": new Date("2023-01-01T15:20:00Z"), 
    "customer_id": ObjectId("66f200000000000000000005"), // Sarah Davis
    "total_price": 720.00, 
    "items": [
      { "product_id": ObjectId("66f300000000000000000003"), "name": "RoseHoney", "quantity": 1, "price": 220.00 },
      { "product_id": ObjectId("66f300000000000000000006"), "name": "WildflowerHoney", "quantity": 1, "price": 500.00 }
    ]
  },
  { 
    "_id": ObjectId("66f400000000000000000003"),
    "order_id": 3, 
    "order_date": new Date("2023-01-02T16:00:00Z"), 
    "customer_id": ObjectId("66f200000000000000000001"), // Alice Johnson
    "total_price": 200.00, 
    "items": [
      { "product_id": ObjectId("66f300000000000000000001"), "name": "Honey", "quantity": 2, "price": 100.00 }
    ]
  }
]);

console.log('Orders collection initialized with Customer references.');

// Example Aggregation: Find all orders and join with customer info
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer_info"
    }
  },
  { $unwind: "$customer_info" },
  {
    $project: {
      order_id: 1,
      order_date: 1,
      total_price: 1,
      "customer_name": { $concat: ["$customer_info.first_name", " ", "$customer_info.last_name"] },
      "items_count": { $size: "$items" }
    }
  }
]).pretty();
