-- limit - number of roles to return
-- offset - number of roles to skip

-- limit product by 5 products.
SELECT name, price
FROM products
ORDER BY name ASC
LIMIT 5;

-- to render the first page, make offset 0 so it wont skip any data
-- to go to the next page, make offset 5. It will start from the 6th data
SELECT name, price
FROM products
ORDER BY name ASC
LIMIT 5 OFFSET 0;

-- to render page 2
SELECT name, price
FROM products
ORDER BY name ASC
LIMIT 5 OFFSET 5;


-- practical api example (page -1) * limit
-- eg offset => (2 - 1) * 5 -> 5
-- (5 - 1) * 5 -> 20:  here, it offset the first 20 data in db.
SELECT name, price
FROM products
ORDER BY name ASC
LIMIT 5 OFFSET 20;