-- left join keeps all rows from the left table. 
-- if the right side table has a matching data, postgres will include that data. 
-- If it does not having a matching data, it returns null for the right side 

-- post -> left table
-- comment -> right table. 
-- Some post will have more comments -100 than others -0. ie, not every post have comments. 


SELECT 
  posts.title AS post_title,
  comments.body AS comment_body
FROM posts
LEFT JOIN comments
  ON posts.id = comments.post_id
ORDER BY posts.title;