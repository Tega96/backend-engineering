-- IN -> value must match one item from the list
-- NOT IN -> value must not match any item from the list
-- BETWEEN -> value must be inside a range

SELECT name, category, price
FROM products
WHERE category IN ('electronics', 'funiture');

-- return all the products that are not electronics and funiture
SELECT name, category
FROM products
WHERE category NOT IN ('electronics', 'funiture');

-- return a range of products
SELECT name, price
FROM  products
-- 100 and 2000 will be included too
WHERE price BETWEEN 100 AND 2000;


SELECT name, category, price, stock
FROM products 
WHERE category IN ('electronics', 'stationery')
  AND price BETWEEN 100 AND 2000;