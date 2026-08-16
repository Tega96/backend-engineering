-- index help postgres find rows faster (without reading every row).
-- it speeds up the query reading process. 


SELECT 
  id, 
  title, 
  status,
  views,
  user_id
FROM posts;

-- to filter the posts by status. /post?status=published
SELECT 
  id, 
  title,
  status,
  views,
  user_id
FROM posts
WHERE status = 'published';


-- to create index. ids = index, posts = table name, status = column name.
CREATE INDEX IF NOT EXISTS idx_post_status
ON posts(status);

SELECT
  title,
  status,
  views
FROM posts
WHERE status = 'published'
ORDER BY views DESC;

-- composit index: filtering and order by at the same time.
-- do this to write a composite index.
CREATE INDEX IF NOT EXISTS idx_posts_status_views
ON posts(status, views DESC);


-- /users/:id/posts => to get all the post written by a particular user. 
SELECT
  title,
  status,
  views
FROM posts
WHERE user_id = (
  SELECT id
  FROM users
  WHERE name = 'rahul'
);

CREATE INDEX IF NOT EXISTS idx_posts_user_id
ON posts(user_id)