BEGIN TRANSACTION;
INSERT INTO users
  (name, email, entries, joined)
values
  ('Eric Puskas', 'erik_puskas@yahoo.com', 2112, '2019-07-25 15:53:52.91'),
  ('Zephir 99', 'zephir@gmail.com', 58, '2019-07-27 14:43:31.953'),
  ('Joe Tyson', 'joe@gmail.com', 70, '2019-07-27 14:42:29.22'),
  ('Nigel Fax', 'nigel@gmail.com', 66, '2019-07-27 14:44:51.347'),
  ('Daisy Allan', 'daisy@gmail.com', 136	, '2019-07-27 14:47:30.802'),
  ('Sally Jones', 'sally@gmail.com'	, 84	, '2019-07-27 14:48:03.827'),
  ('Mark Puskas', 'markpuskas@gmail.com', 200, '2019-07-27 16:30:43.796'),
  ('Kratos', 'kratos@gmail.com', 51, '2019-07-25 16:45:27.586'),
  ('George'	, 'george@gmail.com'	, 114, '2019-07-25 16:29:37.165'),
  ('Mark'	, 'mark@gmail.com'	, 68, '2019-07-25 16:36:19.261'),
  ('Michale Jackson', 'mjackson@gmail.com', '74', '2019-07-27 14:08:13.294');
INSERT INTO login
  (hash, email)
values
  ('$2a$10$bOdp/.9901xCu3TwWiSovuRgN3Mn8UuaPkVw.5klwjtPm4eslo0ta', 'eric@gmail.com'),
  ('$2a$10$xdVCwa8LxHUEG9Rmr.Jn3uwZuGXZ9AY2U/aYm2WQv7o7L.gtWuoYa', 'erik_puskas@yahoo.com'),
  ('$2a$10$rU6kCjNFUfErvHqW1iWQIe9ga8PlhzK8FfFkgUzih0saByWGVEBmS', 'george@gmail.com'),
  ('$2a$10$WL/Cn7pfdiyNA5c9g6bRYORAVedr6.kQo47WRGMBcGqhzmhPBZNRK'	, 'mark@gmail.com'),
  ('$2a$10$bOdp/.9901xCu3TwWiSovuRgN3Mn8UuaPkVw.5klwjtPm4eslo0ta'	, 'kratos@gmail.com'),
  ('$2a$10$Li2A5qoP2ZUFRjb2bKZrZuQeoqWyDBvzcTPSzLAIP74fs29hL7GBG'	, 'tyson@gmail.com'),
  ('$2a$10$FiK1vt5WQKVfESgWqXOr1OB.WYevhKLQjBZqiMbyGRgxYRHo7pN.2'	, 'mundini@gmail.com'),
  ('$2a$10$z7maIayZ4jYx5zMaapiIoeiPBJRHatgXpEPqeUNkgjWjANoZCzwLK'	, 'mjackson@gmail.com'),
  ('$2a$10$I2sev/MlCKZeek1l2OG2EOLwufZ/ZlyheTXpMHRQzo58vm/k1zmjO'	, 'joe@gmail.com'),
  ('$2a$10$NuWFqr8vqYx6H09PNq6LK.jDWza21cXcfzoyr7PyJy2ZG8FL/eQee'	, 'zephir@gmail.com'),
  ('$2a$10$dXluFhna2NsFpxkl/0bTSO7uDIPxN5MQ2musOFcLveajMDqAeA52y'	, 'nigel@gmail.com'),
  ('$2a$10$.tet3OMHvgUsOCaLosLpjOZnDX4524DXS2M9wD7oWqvffqtXSpt9a'	, 'daisy@gmail.com'),
  ('$2a$10$NmKUE8VTVyQBcqhzG/hVQeaT1au2rkvQDVM.Gcjw1iJTu41eKNdpG'	, 'sally@gmail.com'),
  ('$2a$10$XP6OM79CfTF9ZV5VRk2vi.5zl6TLsyagQ3gMBPkZHUkbs26mHGfoS'	, 'markpuskas@gmail.com');
COMMIT;

