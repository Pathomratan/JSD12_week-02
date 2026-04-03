// Select the database
use('honey_shop');

// Clear existing data
db.suppliers.deleteMany({});

// Insert mock data for Suppliers with stable ObjectIds
db.suppliers.insertMany([
  { 
    "_id": ObjectId("66f100000000000000000001"),
    "supplier_id": 1, 
    "name": "Texas Organic Farm", 
    "contact_person": "Pual Smith", 
    "origin": "Texas", 
    "phone_number": "888-0101" 
  },
  { 
    "_id": ObjectId("66f100000000000000000002"),
    "supplier_id": 2, 
    "name": "Honey Been Factory", 
    "contact_person": "Brad Komon", 
    "origin": "California", 
    "phone_number": "085-0102" 
  },
  { 
    "_id": ObjectId("66f100000000000000000003"),
    "supplier_id": 3, 
    "name": "Older Farm Produce", 
    "contact_person": "Senior Farmer", 
    "origin": "Florida", 
    "phone_number": "555-0103" 
  },
  { 
    "_id": ObjectId("66f100000000000000000004"),
    "supplier_id": 4, 
    "name": "Frank Farm", 
    "contact_person": "Frank Farmer", 
    "origin": "Germany", 
    "phone_number": "444-0198" 
  },
  { 
    "_id": ObjectId("66f100000000000000000005"),
    "supplier_id": 5, 
    "name": "Sunflower Farm", 
    "contact_person": "Peter Parker", 
    "origin": "India", 
    "phone_number": "666-5678" 
  },
  { 
    "_id": ObjectId("66f100000000000000000006"),
    "supplier_id": 6, 
    "name": "Bee Happy Honey", 
    "contact_person": "John Doe", 
    "origin": "Louisiana", 
    "phone_number": "555-0199" 
  }
]);

console.log('Suppliers collection initialized with ObjectIds.');
db.suppliers.find().pretty();
