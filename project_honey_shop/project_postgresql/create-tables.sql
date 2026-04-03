-- 1. Create suppliers Table
CREATE TABLE suppliers (
     supplier_id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
         contact_person VARCHAR(255),
         Origin VARCHAR(255),
         phone_number VARCHAR(20)
     );
     
-- 2. Create customer Table (OK)
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    telephone VARCHAR(20)
);

-- 3. Create productlist Table (OK)
CREATE TABLE productlist (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    origin VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    descr VARCHAR(255) NOT NULL
);

-- 4. Create Orders Table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP NOT NULL DEFAULT NOW(),
    customer_id INTEGER REFERENCES customer(customer_id),
    total_price DECIMAL(10, 2) NOT NULL
);

-- 5. Create OrderItems (Join Table)
CREATE TABLE orderItems (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(order_id),
    item_id INTEGER NOT NULL REFERENCES productlist(item_id),
    quantity INTEGER NOT NULL
);