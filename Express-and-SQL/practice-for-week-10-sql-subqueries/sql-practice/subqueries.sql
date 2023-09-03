--phase 1
.print phase 1
.print 
.print with join
SELECT toys.name FROM toys 
JOIN cats ON toys.cat_id = cats.id 
WHERE cats.name = 'Garfield';
.print
.print with subquery
SELECT toys.name FROM toys WHERE
toys.cat_id = (SELECT id FROM cats WHERE name = 'Garfield');

--phase 2
.print 
.print phase 2
.print
INSERT INTO toys (name, cat_id)
VALUES ("Pepperoni", (SELECT id FROm cats WHERE cats.name = 'Garfield'));

SELECT toys.name FROM toys WHERE
toys.cat_id = (SELECT id FROM cats WHERE name = 'Garfield');

--bonus

.print
.print bonus
.print

.print phase 1
.print 
INSERT INTO toys (name, cat_id)
SELECT 'Cat Bed', cats.id FROM cats
WHERE  cats.birth_year < 2013;


SELECT cats.name, toys.name FROM cats
JOIN toys ON toys.cat_id = cats.id
WHERE cats.name IN ('Tiger', 'Oscar', 'Garfield') AND toys.name = 'Cat Bed';

.print 
.print phase 2
.print
INSERT INTO cats_backup
SELECT * FROM cats;
.print original cats
SELECT * FROM cats ;
.print 
.print Cats Backup
SELECT * FROM cats_backup;
.print 
INSERT INTO toys_backup
SELECT * FROM toys;
.print toys
SELECT * FROM toys;
.print
.print toys backup
SELECT * FROM toys_backup;