-- Clear existing data to prevent duplication
TRUNCATE TABLE productlist RESTART IDENTITY CASCADE;

-- Mock Data for Customer
INSERT INTO productlist (item_id, name, origin, price, cost, descr) VALUES
(1, 'Honey', 'China', 100.00, 70.00, 'Original honey with a rich, sweet flavor, perfect for everyday use.'),
(2, 'FlowerHoney', 'Mexico', 150.00, 100.00, 'Delicate floral notes with a smooth, sweet taste.'),
(3, 'RoseHoney', 'India', 220.00, 150.00, 'Distinctive rose aroma with a rich, full-bodied flavor.'),
(4, 'SunflowerHoney', 'Turkey', 300.00, 200.00, 'Bright and cheerful with a mild, nutty taste.'),
(5, 'AcaciaHoney', 'Italy', 400.00, 250.00, 'Clear and light with a delicate floral scent and subtle sweetness.'),
(6, 'WildflowerHoney', 'Spain', 500.00, 300.00, 'Complex and robust with a variety of floral notes and a rich, full-bodied flavor.');
