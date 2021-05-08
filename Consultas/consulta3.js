/*
Consulta que agrupe la cantidad actual de contagios de los últimos 3 meses por
continente.
*/

var fecha = "2021-05-07";
db.proyecto.aggregate([
    {
        $match: {
            date:ISODate(fecha),
            continent: { $eq: null } ,
            location: { $ne: 'World' },
            date: {$gt: new Date(ISODate().getTime() - 1000 * 3600 * 24 * 60) }
        }
    },
    { 
        $project: { 
             month: { $month: "$date" },
             location : 1,
             total_cases: 1
        }
    },
    { 
        "$group": { 
            "_id": {location:"$location", month: "$month"},
            total_cases : {$max : "$total_cases"}
        }
    },
    { 
        $sort: {
            "_id.location":1 , "_id.month":1
            }
    }
]).pretty().toArray();