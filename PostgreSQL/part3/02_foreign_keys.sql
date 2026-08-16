-- Foregin key is a col that points to the primary key of a table. 

-- user.id = parent key while 
-- post.id is foreign key because it is pointing to another table.

SELECT id, name 
FROM users;

SELECT id, user_id, title
FROM posts;