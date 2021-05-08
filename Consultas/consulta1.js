/*
    Consulta que agrupe la cantidad actual de contagios por país.
*/

var fecha='2021-05-06';

db.getCollection("proyecto").find(
    {
        date:ISODate(fecha),
        continent: { $ne: null } 
    },
    { 
        iso_code: 1, 
        location: 1,
        total_cases: 1
    }
).sort
(
    {
        total_cases:-1
    }
)
