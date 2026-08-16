-- one post can have multiple tags, and one tags can be associated with multiple posts
-- post_tag connects both the posts and tags. 

-- post.id is the same as post_tags.post_id
-- tags.id === post_tags.tag_id


-- Display every post a tag is attached to
SELECT 
  posts.id AS post_title,
  tags.name AS tag_name
FROM posts
INNER JOIN post_tags -- post_tag containts the post_id which is the same as the post.id
  ON posts.id = post_tags.post_id
INNER JOIN tags
  ON post_tags.tag_id = tags.id
ORDER BY posts.title, tags.name;

-- Joinings: posts.id --> post_tags.post_id ----> tags.id