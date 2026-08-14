
DROP TABLE IF EXISTS basics.app_events;

CREATE TABLE IF NOT EXISTS basics.app_events (
    
    -- gen_random_uuid - generates a random uuid number.
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name TEXT NOT NULL,

    -- JSONB - stores json data in binary format
    metadata JSONB DEFAULT '{}'::jsonb,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO basics.app_events
    (event_name, metadata)
VALUES
    ('sign-up', '{"browser": "chrome"}'),
    ('sign-in', '{"user": "Tega"}');

SELECT * FROM basics.app_events;

-- to query the object and get it's value as text. 
SELECT 
    event_name,
    metadata ->> 'browser' AS browser
FROM basics.app_events
WHERE metadata ? 'browser';