-- db -> schema -> table -> rows

-- if not exisit prevents an error if the schema is already present
CREATE SCHEMA IF NOT EXISTS basics;


CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- query to give all the schema
SELECT schema_name 
FROM information_schema.schemata
-- information_schema_schemata is system view: the building view that provides you with information about your data structure. 
ORDER BY schema_name;

/**
 basics - The schema we created. 
 information_schema - pg standard metadata schema
 pg_catalog - pg internal system schema
 pg_toast - internal storage schema for large values
 public - default configuration for search path. 
 */