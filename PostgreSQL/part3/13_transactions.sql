-- transaction is used to make multiple sql statements run as one safe unit.

/* for example, in ecommerce application, you'll need to do the following
 - Place an order, 
 - reduce the stock of that product
 - create payment records
 - transfer money to bank account
 - create user record with related profile data.
 In transaction, multiple data must succeed together. All data must succeed or nothing. 

 * Transction starts with BEGIN
   - postgress doesn't save the transaction when started until you use the COMMIT to show the end of transaction.
*/


BEGIN;
-- to change the status of the 'draft' post to 'publish'
UPDATE posts
SET status = 'published'
WHERE title = 'Indexes for Beginners'
  AND status = 'draft';

-- increase the number of views on the post
UPDATE posts
SET views = views + 50
WHERE title = 'Indexes for Beginners';

-- to check if 
SELECT
  title,
  status,
  views
FROM posts
WHERE title = 'Indexes for Beginners';

COMMIT;

-- ROLLBACK cancles all the transaction. 