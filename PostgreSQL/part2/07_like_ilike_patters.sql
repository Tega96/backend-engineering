/**
 like - case sensitive pattern match
 ilike - case insensitive pattern match
 % - means of any number of character
 - exactly one character
*/

SELECT name, price
FROM products
-- % after Wireless means anything can come after 'Wireless'
WHERE name LIKE 'Wireless%';


-- find a product where the name contains electronics
-- ilike will match with 'Electronics' and 'electronics'
SELECT name, category, price
FROM product 
WHERE name ILIKE '%electronics%'