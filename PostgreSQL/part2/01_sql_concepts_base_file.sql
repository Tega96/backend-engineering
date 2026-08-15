
CREATE EXTENSION IF NOT EXISTS pgcrypto;
DROP TABLE IF EXISTS pgcrypto;

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    is_active BOOLEAN NOT NULL DEFAULT true,
    sku TEXT UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO products
  (name, category, price, stock, is_active, sku, description)
VALUES
  ('iphone 12', 'phones and accessories', 50000, 23, TRUE, 'IMEI-FZIOC', 'elaborate design'),
  ('andriod 7', 'phones and accessories', 15000, 412, TRUE, 'ISJW-OWJS', 'great design, good working phone'),
  ('zetel', 'phones and accessories', 2000, 1049, TRUE, 'IENV-ISNC', 'simple design, great outcome'),
  ('hp cerelio', 'laptop and computer', 42000, 53, TRUE, NULL, 'works well');

SELECT * FROM products;
