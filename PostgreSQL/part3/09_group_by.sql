-- Group by creates groups of rows.
-- Where -> filters normal rows before grouping.
-- HAVING -> filters groups after grouping. This is used when condition depends on aggregate funcions.


-- find authors who have written at least 2 posts
SELECT
  u.name AS author_name,
  COUNT(p.id) AS total_post,
  SUM(p.views) AS total_views
FROM users AS u
LEFT JOIN posts as p
  ON u.id = p.user_id
-- Group by creates one group of each user
GROUP BY u.id, u.name
HAVING COUNT(p.id) >= 2
ORDER BY total_post DESC;