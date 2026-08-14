-- To drop a db. Do not use command in production mode. 
DROP DATABASE IF EXISTS postgresql_part1;

-- To create a database inside your postgre server
CREATE DATABASE postgresql_part1;




/** 
Command to run the db: psql -U postgres -d postgres -f part1/01_first_database.sql
psql - the command for running postgresql 
-U postgres - we are logged in as our user: postgres
-d postgres - we are connecting to our database: postgres database
-f part1/01_first_database.sql - tells the location of the file we want to run the sql file from . 


SELECT current_database(); - this will display your current database.
SELECT current_user(); - to check the current user. 
SELECT version(); - to get the version of postgres you are using. 
\l - to get a list of all your database
\dt - to see all your tables.
exist or \q - to exist the pgsql repl
*/
