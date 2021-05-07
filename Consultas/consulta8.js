use fase2;
var fecha="2021-05-03";
db.getCollection("covid").find(
                        {  date:ISODate(fecha), 
                           location:{$nin:["World","Asia","South America","Europe","European Union","North America","Oceania","Africa",""]}},
                           {location:1,new_deaths:1,date:1})
                           .sort({new_deaths:-1})
                           .limit(1)
                           .pretty();
