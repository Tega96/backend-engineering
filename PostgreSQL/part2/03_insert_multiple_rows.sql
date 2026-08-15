
INSERT INTO products (name, category, price, stock, sku, description)
VALUES 
  ('HP Laptop 1', 'Electronics', 49000, 39, 'ELEC-LAP-1001', 'laptop-desc 1'),
  ('HP Laptop 2', 'Electronics', 49000, 39, 'ELEC-LAP-1002', 'laptop-desc 2'),
  ('HP Laptop 3', 'Electronics', 49000, 39, 'ELEC-LAP-1003', 'laptop-desc 3'),
  ('HP Laptop 4', 'Electronics', 49000, 39, 'ELEC-LAP-1004', 'laptop-desc 4');

-- to query specific rows from the table.
SELECT name, category, price, stock sku
FROM products
WHERE sku IN ('ELEC-LAP-1001', 'ELEC-LAP-1002', 'ELEC-LAP-1003', 'ELEC-LAP-1004');