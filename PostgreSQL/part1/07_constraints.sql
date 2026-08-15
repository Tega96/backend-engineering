-- Constriants protects your user from posting wrong data. 
-- NOT NULL, UNIQUE, DEFAULT, CHECK
/**
 Database constraints are stronger than backend validation because it directly protects the data. 
 Various ways of writing into the database is via app api call, scripts, directly from developers.
 Database constraints ensures that whatever method you use, the data remains valid. 
 */

 DROP TABLE IF EXISTS basics.accounts;

 CREATE TABLE basics.accounts (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT true,
    age INTEGER CHECK (age >= 18),
    create_at TIMESTAMP DEFAULT NOW()
 );

 INSERT INTO basics.accounts (full_name, email, age)
 VALUES ('Otega Otite', 'otega@email.com', 30);

 SELECT * FROM basics.accounts;