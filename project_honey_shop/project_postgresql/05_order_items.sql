-- Clear existing data to prevent duplication
TRUNCATE TABLE orderItems RESTART IDENTITY CASCADE;

-- Mock Data for OrderItems
-- Order 1 (total: 1150.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES
(2, 1, 150.00), -- 2 FlowerHoney (150.00)
(1, 1, 100.00), -- 1 Honey (100.00)
(5, 1, 400.00), -- 1 AcaciaHoney (400.00)
(6, 1, 500.00); -- 1 WildflowerHoney (500.00)

-- Order 2 (total: 720.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES
(3, 1, 220.00), -- 1 RoseHoney (220.00)
(6, 1, 500.00); -- 1 WildflowerHoney (500.00)

-- Order 3 (total: 200.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES
(1, 2, 100.00); -- 2 Honey (2 * 100.00 = 200.00)

-- Order 4 (total: 1200.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES
(5, 1, 400.00), -- 1 AcaciaHoney (400.00)
(6, 1, 500.00), -- 1 WildflowerHoney (500.00)
(4, 1, 300.00); -- 1 SunflowerHoney (300.00)

-- Order 5 (total: 400.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (4, 1, 300.00), (1, 1, 100.00);
-- Order 6 (total: 1100.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (2, 2, 150.00), (5, 2, 400.00);
-- Order 7 (total: 720.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (3, 1, 220.00), (6, 1, 500.00);
-- Order 8 (total: 2480.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (1, 4, 100.00), (5, 4, 400.00), (3, 4, 880.00);
-- Order 9 (total: 150.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (2, 1, 150.00);
-- Order 10 (total: 800.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (4, 1, 300.00), (6, 1, 500.00);
-- Order 11 (total: 200.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (1, 2, 100.00);
-- Order 12 (total: 840.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (3, 1, 220.00), (5, 1, 400.00), (3, 1, 220.00);
-- Order 13 (total: 1550.00)    
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (2, 3, 150.00), (5, 3, 400.00);
-- Order 14 (total: 102.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (1, 1, 100.00), (8, 1, 2.00);
-- Order 15 (total: 1800.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (4, 2, 300.00), (6, 2, 500.00), (1, 2, 200.00);
-- Order 16 (total: 550.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (2, 1, 150.00), (5, 1, 400.00);
-- Order 17 (total: 820.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (1, 1, 100.00), (3, 1, 220.00), (6, 1, 500.00);
-- Order 18 (total: 320.00) 
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (3, 1, 220.00), (1, 1, 100.00);
-- Order 19 (total: 800.00)
INSERT INTO orderItems (item_id, quantity, productlist.price) VALUES (5, 2, 400.00);