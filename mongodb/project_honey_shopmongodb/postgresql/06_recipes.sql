TRUNCATE TABLE recipes RESTART IDENTITY CASCADE;
TRUNCATE TABLE recipe_items RESTART IDENTITY CASCADE;

-- Insert recipe for Special Gift Box (item_id 8)
INSERT INTO recipes (recipe_id, item_id, packaging) VALUES
(1, 8, 'Wooden Box with Silk Ribbon');

-- Insert ingredients for the Special Gift Box
INSERT INTO recipe_items (recipe_id, ingredient_id, quantity) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 7, 1);
