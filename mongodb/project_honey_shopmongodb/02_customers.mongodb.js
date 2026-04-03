// Select the database
use('honey_shop');

// Clear existing data
db.customers.deleteMany({});

// Insert mock data for Customers with stable ObjectIds
db.customers.insertMany([
  { 
    "_id": ObjectId("66f200000000000000000001"),
    "customer_id": 1, 
    "first_name": "Alice", 
    "last_name": "Johnson", 
    "address": "123 Main St", 
    "telephone": "0555-0101" 
  },
  { 
    "_id": ObjectId("66f200000000000000000002"),
    "customer_id": 2, 
    "first_name": "Bob", 
    "last_name": "Brown", 
    "address": "456 Oak Ave", 
    "telephone": "0555-0102" 
  },
  { 
    "_id": ObjectId("66f200000000000000000003"),
    "customer_id": 3, 
    "first_name": "Emily", 
    "last_name": "Jones", 
    "address": "789 Pine Rd", 
    "telephone": "0555-0103" 
  },
  { 
    "_id": ObjectId("66f200000000000000000004"),
    "customer_id": 4, 
    "first_name": "Chris", 
    "last_name": "Williams", 
    "address": "321 Elm St", 
    "telephone": "0555-0104" 
  },
  { 
    "_id": ObjectId("66f200000000000000000005"),
    "customer_id": 5, 
    "first_name": "Sarah", 
    "last_name": "Davis", 
    "address": "654 Maple Dr", 
    "telephone": "0555-0105" 
  },
  { 
    "_id": ObjectId("66f200000000000000000006"),
    "customer_id": 6, 
    "first_name": "David", 
    "last_name": "Miller", 
    "address": "987 Cedar Ln", 
    "telephone": "0555-0106" 
  }
]);

console.log('Customers collection initialized with ObjectIds.');
db.customers.find().pretty();
