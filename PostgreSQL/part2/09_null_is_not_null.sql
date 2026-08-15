/**
 null - missing or unknown value
 you should not check null value using the " = null"
 IS NULL
 IS NOT NULL
*/

-- check for inavailability
SELECT name, description
FROM products
WHERE description IS NULL;

-- check for availability
SELECT name, description
FROM products
WHERE description IS NOT NULL;


SELECT name, description
FROM products
WHERE is_active = TRUE
  AND description IS NOT NULL;