/**
 Create multiple tables to understand the relationship 
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;


/**
    CREATE TABLES.
 */
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_UUID(),
    name TEXT NOT NULL
);

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Every user will have a post. reference the user from the user table.
    user_id UUID NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft'
      CHECK (status IN ('draft', 'published')),
    views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0)
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    -- All comments are directly linked to a post. therefore we reference the post's table
    post_id UUID NOT NULL REFERENCES posts(id),
    body TEXT NOT NULL
);

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);

-- One post can have multiple tags and many tags can have only one post. 
CREATE TABLE post_tags (
    post_id UUID NOT NULL REFERENCES posts(id),
    tag_id UUID NOT NULL REFERENCES tags(id),

    -- one tag cannot be added twice: thus create a composite primary key. 
    PRIMARY KEY (post_id, tag_id)
);


/*
  INSERT DATA INTO TABLES. 
 */
-- Add user to db
INSERT INTO users (name) VALUES ('Ananya'), ('Rahul');

-- Add post linked to a user
INSERT INTO posts (user_id, title, status, views)
SELECT id, 'PostgreSQL Joins Explained', 'published', 100
FROM users
WHERE name = 'Ananya';

INSERT INTO posts (user_id, title, status, views)
SELECT id, 'Indexes for Beginners', 'draft', 40
FROM users
WHERE name = 'Ananya';

INSERT INTO posts (user_id, title, status, views)
SELECT id, 'Backend API with PostgreSQL', 'published', 180
FROM users
WHERE name = 'Rahul';

-- Add comment linked to a post
INSERT INTO comments(post_id, body)
SELECT id, 'Very clear explanation'
FROM posts
WHERE title = 'PostgreSQL Joins Explained';

INSERT INTO comments(post_id, body)
SELECT id, 'Please add more examples'
FROM posts
WHERE title = 'Backend APIs, with PostgreSQL';

-- Add the different allowable tags
INSERT INTO tags(name) VALUES ('sql'), ('backend');

-- Add tags linked to users and post
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'PostgreSQL Joins Explained'
  AND t.name = 'sql';

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'Indexes for Beginners'
  AND t.name = 'sql';

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
WHERE p.title = 'Backend APIs with PostgreSQL'
  AND t.name = 'backend';

-- log to the console. 
SELECT 'Part 3 reduced database reset and sample data inserted successfully.' AS message;
