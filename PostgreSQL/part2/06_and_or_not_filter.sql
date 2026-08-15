
/**
 AND - Every condition must be true
 OR - at leaset one condition is true
 NOT - reverse/exclude a condition
*/

-- query electronic products above 1000. ie, price > 1000.
SELECT name, category, price
FROM products
WHERE category = 'phones and accessories'
    AND price > 10000;


-- query information with electronics and "phone and accessories" category
SELECT name, category, price
FROM products
WHERE category = 'phones and accessories'
    OR category > 'Electronics';

-- to query every other data except "phone and accessories category"
SELECT name, category, price
FROM products
WHERE NOT category = 'phones and accessories';

-- query multiple columns. 
SELECT name, category, price, stock
FROM products
WHERE (category = 'electronics' OR category = 'laptop and computer')
    AND stock > 0;


SELECT name, price, stock, is_active
FROM products
WHERE is_active = true
    AND (price < 1000 OR stock >= 100);