TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE;

INSERT INTO suppliers (supplier_id, name, contact_person, origin, phone_number) VALUES
(1, 'Texas Organic Farm', 'Pual Smith', 'Texas', '888-0101'),
(2, 'Honey Been Factory', 'Brad Komon', 'California', '085-0102'),
(3, 'Older Farm Produce', 'Senior Farmer', 'Florida', '555-0103'),
(4, 'Frank Farm', 'Frank Farmer', 'Germany', '444-0198'),
(5, 'Sunflower Farm', 'Peter Parker', 'India', '666-5678'),
(6, 'Bee Happy Honey', 'John Doe', 'Louisiana', '555-0199');
