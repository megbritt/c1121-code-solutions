select "name" as "genres",
       count("genres"."name")
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
 where "firstName" = 'Lisa'
   and "lastName" = 'Monroe'
 group by "genres"."name";
