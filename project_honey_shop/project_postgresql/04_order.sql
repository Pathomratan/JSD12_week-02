-- Clear existing data to prevent duplication
TRUNCATE TABLE orders RESTART IDENTITY CASCADE;

-- Mock data for orders
-- Note: total_price is calculated manually from the order items for this mock data.
INSERT INTO orders (order_id, order_date, customer_id, total_price) VALUES
(1, '2023-01-01 14:05:00', 2, 1150.00), -- Alice bought 2 FlowerHoney, 1 Honey, 1 AcaciaHoney and 1 WildflowerHoney
(2, '2023-01-01 15:20:00', 5, 720.00), -- Bob bought 1 RoseHoney and 1 WildflowerHoney
(3, '2023-01-02 16:00:00', 1, 200.00), -- Emily bought 2 Honey
(4, '2023-01-02 17:30:00', 3, 1200.00), -- David bought 1 AcaciaHoney, 1 WildflowerHoney and 1 SunflowerHoney
(5, '2023-01-03 10:00:00', 4, 400.00), -- Carol bought 1 CloverHoney
(6, '2023-01-06 19:00:00', 2, 1100.00), -- Alice bought 2 FlowerHoney and 2 AcaciaHoney
(7, '2023-01-07 20:00:00', 5, 720.00), -- Bob bought 1 RoseHoney and 1 WildflowerHoney
(8, '2023-01-08 21:00:00', 1, 2480.00), -- Emily bought 4 Honey, 4 AcaciaHoney and 4 RoseHoney
(9, '2023-01-09 22:00:00', 3, 800.00), -- David bought 1 SunflowerHoney and 1 CloverHoney
(10, '2023-01-10 23:00:00', 4, 1800.00), -- Carol bought 2 SunflowerHoney and 2 AcaciaHoney
(11, '2023-01-11 00:00:00', 2, 200.00), -- Alice bought 2 Honey
(12, '2023-01-12 01:00:00', 5, 720.00), -- Bob bought 1 FlowerHoney, 1 RoseHoney and 1 CloverHoney
(13, '2023-01-13 02:00:00', 1, 1550.00), -- Emily bought 3 FlowerHoney and 3 AcaciaHoney
(14, '2023-01-14 03:00:00', 3, 102.00), -- David bought 1 Honey and 1 Special Gift Box
(15, '2023-01-15 04:00:00', 4, 1800.00), -- Carol bought 2 SunflowerHoney, 2 AcaciaHoney and 2 Honey
(16, '2023-01-16 05:00:00', 2, 550.00), -- Alice bought 1 FlowerHoney and 1 AcaciaHoney
(17, '2023-01-17 06:00:00', 5, 820.00), -- Bob bought 1 Honey, 1 RoseHoney and 1 WildflowerHoney
(18, '2023-01-18 07:00:00', 1, 320.00), -- Emily bought 1 RoseHoney and 1 Honey
(19, '2023-01-19 08:00:00', 3, 800.00); -- David bought 2 SunflowerHoney


