select "countries"."name",
       count("cities".*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
 group by "countries"."name";
