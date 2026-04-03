-- 1. Create suppliers Table
CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    origin VARCHAR(255),
    phone_number VARCHAR(20)
);

-- 2. Create customers Table
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    telephone VARCHAR(20)
);

-- 3. Create products Table
CREATE TABLE products (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    origin VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    description TEXT
);

-- 4. Create orders Table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP NOT NULL DEFAULT NOW(),
    customer_id INTEGER REFERENCES customers(customer_id),
    total_price NUMERIC(10, 2) NOT NULL
);

-- 5. Create order_items Table
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(order_id),
    item_id INTEGER NOT NULL REFERENCES products(item_id),
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

-- 6. Create recipes Table (for complex products like gift boxes)
CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL UNIQUE REFERENCES products(item_id),
    packaging VARCHAR(255)
);

-- 7. Create recipe_items Table (linking products as ingredients)
CREATE TABLE recipe_items (
    recipe_item_id SERIAL PRIMARY KEY,
    recipe_id INTEGER NOT NULL REFERENCES recipes(recipe_id),
    ingredient_id INTEGER NOT NULL REFERENCES products(item_id),
    quantity INTEGER NOT NULL
);
