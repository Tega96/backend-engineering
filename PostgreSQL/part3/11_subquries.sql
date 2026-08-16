-- These are queries nested inside another sql statement.
-- Postgres runs the inner query first before the outer query. 
-- eg. You can calculate a value in your inner query which can return into the outer query. 


-- query to check which post performs better than average.
SELECT
  title,
  status,
  views
FROM posts
WHERE views > (
    SELECT AVG(views)
    FROM posts
) -- This is the sub query
ORDER BY views;
