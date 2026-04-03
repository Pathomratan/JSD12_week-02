# Honey Shop MongoDB Summary

## Collections Overview

### 1. suppliers
Stores information about honey producers and farms.
- **Fields:** `_id` (ObjectId), `name`, `contact_person`, `origin`, `phone_number`.

### 2. customers
Stores customer contact and shipping information.
- **Fields:** `_id` (ObjectId), `first_name`, `last_name`, `address`, `telephone`.

### 3. products
Stores honey items, prices, costs, and current stock levels. References `suppliers`.
- **Fields:** `_id` (ObjectId), `name`, `origin`, `price`, `cost`, `stock_level`, `unit`, `supplier_id` (Reference), `description`.
- **Embedded Data:** `recipe` (Optional array of product components for gift boxes).

### 4. orders
Stores transaction records. References `customers`.
- **Fields:** `_id` (ObjectId), `order_date`, `customer_id` (Reference), `total_price`.
- **Embedded Data:** `items` (Array of denormalized product info: `product_id`, `name`, `quantity`, `price`).

## Key Relationships
- **One-to-Many (Reference):** One `supplier` can provide many `products`.
- **One-to-Many (Reference):** One `customer` can place many `orders`.
- **One-to-Many (Embedding):** One `order` contains multiple `items` (embedded for snapshot consistency).
- **Many-to-Many (Self-Reference/Embedding):** A `Special Gift Box` product embeds other `products` as components in its `recipe`.
