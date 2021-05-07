use fase2;
var fecha_menor="2021-04-03";
var fecha_mayor="2021-05-03";
db.getCollection("covid").find({location:"Guatemala",
                         date : { 
                             $gt:ISODate(fecha_menor), 
                             $lt:ISODate(fecha_mayor)
                                 }
                                });