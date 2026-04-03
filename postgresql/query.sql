
SELECT * FROM staff


SELECT * FROM menu_items
WHERE category = 'Burger';

SELECT * FROM menu_items
ORDER BY price DESC;

SELECT menu_items.price FROM menu_items
ORDER BY price ASC LIMIT 3;

SELECT ingredients.name FROM ingredients
JOIN suppliers ON ingredients.supplier_id = suppliers.supplier_id
WHERE suppliers.name = 'party supplies co.';

SELECT * FROM orders
WHERE staff_id = 1
ORDER BY order_date DESC;

SELECT * FROM orders
WHERE order_date >= '2025-10-27 00:00:00' AND order_date < '2025-10-28 00:00:00';

