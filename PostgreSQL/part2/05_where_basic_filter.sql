/**
 WHERE is used to filter data according to a predefined condition. 
 eg endpoint - /products?category=electronics
*/

-- to query data based on category
SELECT name, price, category
FROM products
WHERE category = 'Electronics';

-- query data based on price condition
SELECT name, price
FROM products
WHERE price >= 1000;

