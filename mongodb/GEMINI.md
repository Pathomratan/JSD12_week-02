# GEMINI.md - Chrome Burger MongoDB Project

## Project Overview
This project is a MongoDB implementation for a burger restaurant system called "chrome_burger". It provides a set of scripts to initialize and query a database for managing suppliers, staff, ingredients, menu items (with recipes), and customer orders.

### Main Technologies
- **Database:** MongoDB
- **Logic/Data:** MongoDB Shell scripts (`.mongodb.js`)
- **Data Model:** A hybrid approach using both referencing (e.g., `supplier_id` in `ingredients`) and embedding (e.g., `items` in `orders`, `recipe` in `menu_items`) to demonstrate MongoDB's flexible schema capabilities.

## Project Structure
The project is organized into numbered scripts to indicate a suggested execution order for setting up the database:

- `01_suppliers.mongodb.js`: Initializes the `suppliers` collection with mock data.
- `02_staff.mongodb.js`: Initializes the `staff` collection with mock data (Cashiers and Cooks).
- `03_ingredients.mongodb.js`: Initializes the `ingredients` collection, referencing suppliers. Includes an aggregation example to join with supplier info.
- `04_menu_item.mongodb.js`: Initializes the `menu_items` collection, featuring embedded `recipe` arrays that link to ingredients.
- `05_orders.mongodb.js`: Initializes the `orders` collection with embedded `items` (denormalized name and price) and a reference to the staff member who handled the order.
- `query.mongodb.js`: Placeholder for common database queries.
- `mongodb-summary.md`: Placeholder for project documentation.

## Running the Scripts
These scripts are designed to be run in a MongoDB environment that supports `.mongodb.js` files (such as the MongoDB for VS Code extension).

1.  **Connection:** Ensure you are connected to a MongoDB instance.
2.  **Execution Order:** Run the scripts in order (`01` through `05`) to populate the database consistently.
3.  **Database Selection:** Each script automatically switches to the `chrome_burger` database using `use('chrome_burger');`.
4.  **Data Reset:** Each script contains a `deleteMany({})` call at the beginning, ensuring a clean slate before inserting mock data.

## Development Conventions
- **Collection Naming:** Use lowercase with underscores (e.g., `menu_items`, `order_items`).
- **ObjectIds:** Hardcoded `ObjectIds` are used in mock data scripts to ensure stable cross-referencing during development and testing.
- **Aggregation:** Use the MongoDB Aggregation Framework (`$lookup`, `$unwind`) for operations that require joining data across collections (e.g., viewing order details with staff information).
- **Embedding vs. Referencing:** 
    - **Embed** data that is frequently accessed together and doesn't change often (e.g., items within an order).
    - **Reference** data that is shared across multiple documents or has a large growth potential (e.g., suppliers for ingredients).

## TODOs / Next Steps
- [ ] Populate `query.mongodb.js` with common business queries (e.g., total sales by staff, stock level alerts).
- [ ] Add indexes to frequently queried fields (e.g., `category` in `menu_items`, `order_date` in `orders`).
- [ ] Complete the `mongodb-summary.md` with detailed collection schemas and relationships.
