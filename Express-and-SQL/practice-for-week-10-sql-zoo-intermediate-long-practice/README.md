# Long Practice: Intermediate SQL Zoo

It is important to practice the skill of querying databases with relationships
until you start to feel comfortable. Now, it's time to use **SQL Zoo** to
improve your skills.

Use this material to help you get more practice as your prepare for the
asssessment.

**If you haven't already, do the Basic SQL Zoo Long Practice before attempting
these practices.**

## Review

Begin by reviewing the following concepts using reference material in SQL Zoo.

* [`SELECT`...`JOIN`][join reference1]

## Practice Problems & Quizzes

As you have time, complete the following practice as well. You can come back to
these during assessment prep.

* Intermediate phase 1: `JOIN` __(30 minutes)__
  * [`JOIN` Tutorial][join tutorial1]
  * [`JOIN` Quiz][join quiz1]
* Intermediate phase 2: More `JOIN` __(30 minutes)__
  * [`JOIN` Tutorial][join tutorial2]
  * [`JOIN` Quiz][join quiz2]

[join reference1]: https://sqlzoo.net/wiki/SELECT_.._JOIN

[join tutorial1]: https://sqlzoo.net/wiki/The_JOIN_operation
[join tutorial2]: https://sqlzoo.net/wiki/More_JOIN_operations

[join quiz1]: https://sqlzoo.net/wiki/JOIN_Quiz
[join quiz2]: https://sqlzoo.net/wiki/JOIN_Quiz_2



phase 1:

1.
SELECT matchid, player FROM goal
JOIN eteam ON eteam.id = goal.teamid
WHERE eteam.id = 'GER';

2.
SELECT id, stadium, team1, team2 FROM game WHERE id = 1012;

3.
SELECT goal.player,goal.teamid, game.stadium, game.mdate FROM goal
JOIN game ON (game.id = goal.matchid) 
WHERE goal.teamid = 'GER';

4. 
SELECT game.team1, game.team2, goal.player FROM goal 
JOIN game ON (game.id = goal.matchid)
WHERE player LIKE 'MARIO%';

5.
SELECT goal.player, goal.teamid, eteam.coach, goal.gtime
FROM goal
JOIN eteam on eteam.id = goal.teamid
WHERE goal.gtime <= 10;

6.
SELECT game.mdate, eteam.teamname FROM game
JOIN eteam ON (eteam.id = game.team1)
WHERE eteam.coach = 'Fernando Santos';

7.
SELECT goal.player FROM goal 
JOIN game ON game.id = goal.matchid
WHERE game.stadium = 'National Stadium, Warsaw';

8. 
SELECT DISTINCT goal.player FROM goal
JOIN game ON game.id = goal.matchid
WHERE goal.teamid != 'GER' AND 
(game.team1 = 'GER' OR game.team2 = 'GER');

9.
SELECT eteam.teamname, COUNT(goal.teamid) FROM eteam 
JOIN goal ON goal.teamid = eteam.id GROUP BY eteam.teamname;

10.
SELECT game.stadium, COUNT(goal.matchid) FROM game
JOIN goal ON goal.matchid = game.id
GROUP BY game.stadium;

11.
SELECT goal.matchid, game.mdate, COUNT(goal.teamid) FROM game 
JOIN goal ON goal.matchid = game.id
 WHERE (game.team1 = 'POL' OR game.team2 = 'POL') GROUP BY  goal.matchid, game.mdate;

12.
SELECT goal.matchid, game.mdate, COUNT(goal.matchid) from goal
JOIN game ON (game.id = goal.matchid)
WHERE goal.teamid = 'GER'
GROUP BY goal.matchid, game.mdate;

13.
SELECT game.mdate, game.team1, 
SUM(CASE WHEN goal.teamid = game.team1 THEN 1 ELSE 0 END) score1,
game.team2,
SUM(CASE WHEN goal.teamid = game.team2 THEN 1 ELSE 0 END) score2
FROM game LEFT JOIN goal ON matchid = id
GROUP BY mdate, team1, team2

phase 2:
1.
SELECT movie.id, movie.title FROM movie 
WHERE movie.yr = 1962;

2.
SELECT yr FROM movie WHERE title = 'Citizen Kane';

3.
SELECT movie.id, movie.title, movie.yr FROM movie WHERE movie.title LIKE '%Star Trek%' ORDER BY yr;

4.
SELECT id FROM actor WHERE name = 'Glenn Close';

5.
SELECT id FROM movie WHERE title = 'Casablanca';

6.
SELECT actor.name from actor 
JOIN casting ON casting.actorid = actor.id
WHERE casting.movieid = 27;

7.
SELECT actor.name from actor
JOIN casting ON casting.actorid = actor.id 
JOIN movie ON movie.id = casting.movieid
WHERE movie.title = 'Alien';

8.
SELECT movie.title FROM movie
JOIN casting ON casting.movieid = movie.id
JOIN actor ON actor.id = casting.actorid
WHERE actor.name = 'Harrison Ford';

9.
SELECT movie.title FROM movie
JOIN casting ON casting.movieid = movie.id
JOIN actor ON actor.id = casting.actorid
WHERE
actor.name = 'Harrison Ford' AND casting.ord > 1;

10.
SELECT movie.title, actor.name FROM movie
JOIN casting ON casting.movieid = movie.id
JOIN actor ON actor.id = casting.actorid
WHERE movie.yr = 1962 AND casting.ord = 1;

11.
SELECT movie.yr, COUNT(*) FROM movie
JOIN actor ON actor.id = movie.director
WHERE actor.name = 'Rock Hudson' 
GROUP BY movie.yr
HAVING COUNT(*) > 2;

12.
SELECT movie.title, actor.name FROM movie
JOIN casting ON casting.movieid = movie.id
JOIN actor ON actor.id = casting.actorid
WHERE casting.ord = 1 AND movie.id IN 
(SELECT movie.id FROM movie 
JOIN casting ON casting.movieid = movie.id
JOIN actor ON actor.id = casting.actorid
WHERE actor.name = 'Julie Andrews');

13.
SELECT actor.name FROM actor
JOIN casting ON casting.actorid = actor.id
WHERE casting.ord = 1 
GROUP BY actor.name
HAVING COUNT(*) >=15
ORDER BY actor.name;

14.
SELECT movie.title, COUNT(casting.actorid) as numActors FROM movie
JOIN casting ON casting.movieid = movie.id
WHERE movie.yr = 1978
GROUP BY movie.title
ORDER BY numActors DESC, movie.title

15.
SELECT actor.name FROM actor
JOIN casting ON casting.actorid = actor.id
WHERE actor.name != 'Art Garfunkel' AND 
casting.movieid IN 
(SELECT casting.movieid FROM casting
JOIN actor ON actor.id = casting.actorid
WHERE actor.name = 'Art Garfunkel');

