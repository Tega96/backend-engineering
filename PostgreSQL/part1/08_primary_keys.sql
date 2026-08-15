/**
 without primary key, it becomes harder to update, delete, 
 reference or connect to rows in another table. 
*/


DROP TABLE IF EXISTS basics.salas;

CREATE TABLE basics.sales (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL, 
    price NUMERIC(10,2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO basics.sales (title, price)
VALUES 
    ('sales 1 ', 200),
    ('sales 2', 6994);

SELECT * FROM basics.sales;