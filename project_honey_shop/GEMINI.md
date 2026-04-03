# GEMINI.md - Hunny Ecommerce Project

## Project Overview
This project is an e-commerce platform designed for selling various types of honey ("Hunny"). It focuses on providing a centralized shop where customers can browse, search, and purchase honey from different origins (e.g., China, Mexico, India, Italy, Spain).

### Main Technologies
- **Database:** PostgreSQL (Schema includes tables for Suppliers, Staff, Ingredients, MenuItems, RecipeItems, Orders, and OrderItems).
- **Logic/Data:** JavaScript (Used for product data structures and basic mapping).
- **Design:** Excalidraw (Used for Business Model Canvas, Use Case Diagrams, and ER Diagrams).

## Project Structure
The project is organized into documentation, diagrams, and database scripts:

- `01_my-ecommerce.md`: Problem statement and high-level solution description.
- `05_product-backlog.md`: Detailed feature requirements including login, search, pricing, and payment.
- `06_bring-it-to-javascript.js`: Initial JavaScript implementation for handling product lists and data objects.
- `postsql/`: Contains all SQL scripts for database initialization and querying.
    - `create-tables.sql`: Main schema definition.
    - `01_suppliers.sql` to `07_order_items.sql`: Data population scripts (Note: currently contains mock data for a burger/restaurant theme).
    - `query.sql`: Common database queries for staff, menu items, and orders.
- `*.excalidraw`: Visual documentation for business model, use cases, and ER diagrams.

## Key Files and Their Purpose
| File | Description |
| :--- | :--- |
| `01_my-ecommerce.md` | Defines the core mission: "All Hunny shop to can buy". |
| `05_product-backlog.md` | Lists functional requirements: Customer Login, Search, Bucket (Cart), Total Calculation, and Payment (QR/Credit Card). |
| `06_bring-it-to-javascript.js` | Demonstrates how honey products (Name, Price, Origin) are mapped to IDs for application logic. |
| `postsql/create-tables.sql` | The foundation of the data layer, defining the relational structure. |

## Development Conventions & Usage
- **Database Setup:** Run `postsql/create-tables.sql` first, followed by the numbered scripts in the `postsql/` directory to populate data.
- **Data Model:** The system uses a "Recipe" model where `MenuItems` are composed of `Ingredients` via `RecipeItems`. This suggests a manufacturing or complex product assembly logic.
- **Naming Convention:** Files are prefixed with numbers (e.g., `01_`, `02_`) to indicate a suggested reading or execution order.

## TODOs / Next Steps
- [ ] Align database mock data with the "Honey" theme (currently contains burger-related data).
- [ ] Implement the backend logic for the features listed in `05_product-backlog.md`.
- [ ] Develop the frontend to display products mapped in `06_bring-it-to-javascript.js`.
