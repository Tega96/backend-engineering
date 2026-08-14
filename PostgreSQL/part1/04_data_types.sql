
DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic (
    
    id SERIAL PRIMARY KEY,

    -- name will take a string with a max length of 100 characters
    name VARCHAR(100) NOT NULL,
    description TEXT,

    -- integer stores whole number.
    stock INTEGER DEFAULT 0,

    -- bigint stores whole number that is larger than integer
    total_views BIGINT DEFAULT 0,

    -- numeric is useful when you want to write an exact decimal value.
    -- 10 - the total number, 2 - the allowed number after decimal
    price NUMERIC(10,2),

    is_active BOOLEAN DEFAULT true
);

INSERT INTO basics.products_basic 
    (name, description, stock, total_views, price, is_active)
VALUES 
    ('Tom-Tom', 'Good candy', 45, 595493, 34564.34, false),
    ('Television', 'Coloured tv', 10, 200, 50000, true);

SELECT * FROM basics.products_basic;

SELECT (name, description, total_views, price)
FROM basics.products_basic
WHERE is_active;