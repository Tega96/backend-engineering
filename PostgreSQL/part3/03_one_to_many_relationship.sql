-- one parent role can have many child roles 
-- eg. One user can write many post, but only one post can belong to one user. 
/* 
 users - parent table
 posts - child table
 post.user_id ===relatest to ===> user.id
*/

SELECT 
  users.name AS author_name,
  posts.title AS post_title,
  posts.status
FROM users
-- There is a relation between user.id with post.user_id that is why we are joining from here
INNER JOIN posts
  ON users.id = posts.user_id -- literally the same id. There is a match. 
ORDER BY users.name, posts.title;
