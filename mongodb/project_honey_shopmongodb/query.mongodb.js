// Select the database
use('honey_shop');

// 1. Find all suppliers
console.log('--- All Suppliers ---');
db.suppliers.find({});

// 2. Find products with price over 200
console.log('--- Products priced over 200 ---');
db.products.find({ price: { $gt: 200 } });

// 3. Find customers in 'Main St'
console.log('--- Customers on Main St ---');
db.customers.find({ address: /Main St/ });

// 4. Aggregate: Total sales per customer
console.log('--- Total Sales per Customer ---');
db.orders.aggregate([
  {
    $group: {
      _id: "$customer_id",
      totalSpent: { $sum: "$total_price" },
      orderCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customer_details"
    }
  },
  { $unwind: "$customer_details" },
  {
    $project: {
      _id: 0,
      customer_name: { $concat: ["$customer_details.first_name", " ", "$customer_details.last_name"] },
      totalSpent: 1,
      orderCount: 1
    }
  },
  { $sort: { totalSpent: -1 } }
]);

// 5. Aggregate: Products with their supplier names
console.log('--- Products and Suppliers ---');
db.products.aggregate([
  {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id",
      foreignField: "_id",
      as: "s"
    }
  },
  { $unwind: "$s" },
  {
    $project: {
      _id: 0,
      product_name: "$name",
      supplier: "$s.name",
      origin: "$s.origin"
    }
  }
]);
