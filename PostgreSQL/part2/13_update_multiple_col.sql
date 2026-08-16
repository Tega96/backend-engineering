SELECT * FROM products;

UPDATE products
SET price = ROUND(price * 1.10, 2) -- add 10% to existing price and round by 2 decimal place.
WHERE category = 'electronics';

SELECT name, category, price, is_active 
FROM products
WHERE category = 'Electronics';

UPDATE products
SET is_active = FALSE
WHERE stock = 0