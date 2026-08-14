
-- null - unknown/missing val
-- empty string - known string value but has no characters
-- zero - actual numeric value of 0

DROP TABLE IF EXISTS basics.value_examples;

CREATE TABLE basics.value_examples (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    bio TEXT,
    score INTEGER
);

INSERT INTO basics.value_examples
    (nickname, bio, score)
VALUES
    (null, 'learning postgreSQL', 10),
    ('', 'empty nickname', 30),
    ('tega', '', 0),
    ('john', null, null);

-- query all values
SELECT * FROM basics.value_examples;

-- query all values without nicknames.
SELECT * FROM basics.value_examples
WHERE nickname IS NULL;

-- query all where nickname is empty string

-- query all wher score is 0
SELECT * FROM basics.value_examples
WHERE score = 0;

-- query all where nickname is not null
SELECT * FROM basics.value_examples
WHERE nickname IS NOT NULL;
