-- Aggregate functions calculate one result from many rows
-- COUNT() -> count the number of rows
-- SUM() -> finds the total value of rows
-- AVG() -> determines the average value on a group of rows
-- MAX() -> find the largest value

-- Aggregate functions are used in admin dashboards, reports, analytics, admin panels etc..

SELECT
  COUNT(*) AS total_table,
  -- count all the rows where the status is set to 'published'
  COUNT(*) FILTER (WHERE status = 'published') AS published_posts,
  -- Add all views count in post table
  SUM(views) as total_views,

  -- find the average views
  AVG(views) AS average_views,

  MIN(views) AS lowest_views,
  MAX(views) AS highest_views

FROM posts;