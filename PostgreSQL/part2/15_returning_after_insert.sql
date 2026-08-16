-- Returning returns the affected rows immdediately after insert, update or delete.

-- INSERT INTO products (name, category, price, stock, sku, description)
-- VALUES ('webcam camera', 'electronics', 3939.04, 34, 'ELEC-WEBC-009', 'webcam camera description')
-- RETURNING id, name, category, price, stock, created_at;

-- UPDATE products
-- SET stock = stock + 23
-- WHERE sku = 'ELEC-WEBC-009'
-- RETURNING id, name, products;

DELETE FROM products
WHERE sku = 'ELEC-WEBC-009'
RETURNING id, name, sku;