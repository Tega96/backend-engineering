
-- don't do this in prod. for information purpose only.
DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (
    -- Serial creates an auto incrementing integer
    -- The primary key means the col uniquely identifies each other. 
    id SERIAL PRIMARY KEY,

    -- text - string data
    -- not null means col is required. ie. pg will reject if value is empty or not present
    name TEXT NOT NULL,

    -- unique means no 2 student will have the same email. 
    email TEXT NOT NULL,

    age INTEGER CHECK (age >= 18),

    -- timestamp stores the date and time format.
    -- default means if no value is given, it will take the default option - now()
    create_at TIMESTAMP DEFAULT NOW()
);


-- insert some data
INSERT INTO basics.students (name, email, age)
VALUES 
    ('Otega', 'otiteotega@gmail.com', 30),
    ('John', 'john23@gmail.com', 24);