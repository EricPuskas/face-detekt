BEGIN TRANSACTION;

CREATE TABLE images
(
  id serial PRIMARY KEY,
  url text unique not null
);

COMMIT;