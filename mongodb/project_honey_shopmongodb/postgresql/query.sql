-- 1. ค้นหาซัพพลายเออร์ทั้งหมด
-- --- All Suppliers ---
SELECT * FROM suppliers;

-- 2. ค้นหาน้ำผึ้งที่มีราคามากกว่า 200
-- --- Honey priced over 200 ---
SELECT * FROM products WHERE price > 200;

-- 3. ดูคำสั่งซื้อพร้อมข้อมูลลูกค้า
-- --- Orders with Customer Info ---
SELECT 
    o.order_id, 
    o.order_date, 
    o.total_price, 
    c.first_name || ' ' || c.last_name AS customer_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;

-- 4. ดูรายการสินค้าในแต่ละคำสั่งซื้อ (Extra)
SELECT 
    oi.order_id, 
    p.name, 
    oi.quantity, 
    oi.price AS price_at_order
FROM order_items oi
JOIN products p ON oi.item_id = p.item_id;
