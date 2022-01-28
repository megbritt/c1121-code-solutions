select concat("firstName", ' ', "lastName") as "name",
       sum("payments"."amount") as "totalPaid"
  from "customers"
  join "payments" using ("customerId")
 group by concat("customers"."firstName", ' ', "customers"."lastName")
 order by "totalPaid" desc;
