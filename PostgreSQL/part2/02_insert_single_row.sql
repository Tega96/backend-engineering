INSERT INTO products (
    name,
    category,
    price,
    stock,
    sku,
    description
)
VALUES (
    'Laptop stand',
    'electronics',
    5000,
    23,
    'ELEC-KEY-002',
    'great laptop, in good working condition.'
);


-- to check if an exact information is present
SELECT * FROM product WHERE sku = 'ELEC-KEY-002'