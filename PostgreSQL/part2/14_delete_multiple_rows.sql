

INSERT INTO products (name, category, price, stock, sku, description)
VALUES ('temp product to be delivered', 'electronics', 353.35, 23, 'ELEC-TEMP-013', 'A greate product, will soon be deleted');

SELECT name, category, sku
FROM products
WHERE sku = 'ELEC-TEMP-013';

DELETE FROM products
WHERE sku = 'ELEC-TEMP-013';