var fecha_menor="2020-12-01";
var fecha_mayor="2021-01-01";
db.getCollection("proyecto").find({location:"Guatemala",
                         date : { 
                             $gt:ISODate(fecha_menor), 
                             $lt:ISODate(fecha_mayor)
                                 }
                                });