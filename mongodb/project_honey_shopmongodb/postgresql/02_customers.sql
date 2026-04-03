TRUNCATE TABLE customers RESTART IDENTITY CASCADE;

INSERT INTO customers (customer_id, first_name, last_name, address, telephone) VALUES
(1, 'Alice', 'Johnson', '123 Main St', '0555-0101'),
(2, 'Bob', 'Brown', '456 Oak Ave', '0555-0102'),
(3, 'Emily', 'Jones', '789 Pine Rd', '0555-0103'),
(4, 'Chris', 'Williams', '321 Elm St', '0555-0104'),
(5, 'Sarah', 'Davis', '654 Maple Dr', '0555-0105'),
(6, 'David', 'Miller', '987 Cedar Ln', '0555-0106');
