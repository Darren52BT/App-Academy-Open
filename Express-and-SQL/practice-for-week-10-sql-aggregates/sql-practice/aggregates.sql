--step 1
.print step 1
SELECT COUNT(*) as num_cats FROM cats;
.print

--step 2
.print step 2
SELECT cats.name, cats.birth_year FROM cats
ORDER BY birth_year ASC LIMIT 1;
.print
SELECT cats.name, cats.birth_year FROM cats
ORDER BY birth_year DESC LIMIT 1;
.print
SELECT cats.name, cats.birth_year FROM cats 
WHERE cats.birth_year IN ((SELECT min(cats.birth_year) FROM cats), (SELECT max(birth_year) FROM cats));



--BONUS
.print BONUS
.print
.print STEP 1
SELECT COUNT(*) as num_toys, cats.name FROM toys  
JOIN cats ON cats.id = toys.cat_id
GROUP BY cats.name;

.print
.print STEP 2
SELECT cats.name, COUNT(*) as numToys FROM cats 
JOIN toys ON toys.cat_id = cats.id 
GROUP BY cats.name 
HAVING numToys >=2;