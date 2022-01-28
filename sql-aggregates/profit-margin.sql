with "filmCopyAmount" as (
  select "films"."filmId" as "filmId",
        "films"."title" as "title",
      count ("inventory".*) as "amountOfCopies"
      from "films"
      join "inventory" using ("filmId")
    group by "films"."filmId"
    order by "films"."filmId"
), "costOfEachFilm" as (
  select "films"."filmId",
        "films"."title",
        sum("replacementCost" * "filmCopyAmount"."amountOfCopies") as "cost"
        from "films"
        join "filmCopyAmount" using ("filmId")
      group by "filmId"
),
"profits" as (
  select "films"."filmId",
          sum("payments"."amount") as "profit"
        from "payments"
        join "rentals" using ("rentalId")
        join "inventory" using ("inventoryId")
        join "films" using ("filmId")
      group by "films"."filmId"
), "filmsRevenue" as (
  select "films"."filmId",
      sum("profits"."profit" - "costOfEachFilm"."cost") as "revenue"
      from "films"
      join "costOfEachFilm" using ("filmId")
      join "profits" using ("filmId")
    group by "filmId"
)

select "films"."title",
       "films"."description",
       "films"."rating",
       "filmsRevenue"."revenue"
      from "films"
      join "filmsRevenue" using ("filmId")
    order by "filmsRevenue"."revenue" desc
    limit 5;
