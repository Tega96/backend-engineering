
SELECT * FROM products;

-- to query specific columns
SELECT name, category, price 
FROM products;

-- AS create an alias for the output of that column name. 
-- It makes the column name easier to read
SELECT 
    name AS product_name,
    price AS selling_price,
    stock AS available_quantity
FROM products;