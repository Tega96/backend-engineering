SELECT * FROM products;

UPDATE products
SET price = 1199.00,
    stock = 27
WHERE sku = 'ELEC-KEY-002';

SELECT name, price, stock sku
FROM products
WHERE sku = 'ELEC-KEY-002';
