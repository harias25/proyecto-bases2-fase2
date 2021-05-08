/*
    Función o método que reciba el nombre del país y nos muestre el acumulado mensual
    de infectados, muertes y vacunados
*/

consulta2('Guatemala');

var consulta2 = function(pais)
{
    return db.proyecto.aggregate([
    {
        $match: {
            location:pais
        }
    },
    {
        $group:{
            _id: {
                month: { $month: "$date" },
                year: { $year: "$date" }
            },
            casos:{ $sum : "$new_cases"},
            muertes: {$sum : "$new_deaths"},
            vacunados: {$sum : "$new_vaccinations"}
        }
    },
    { $sort: {"_id.year":1 } }
    ]).pretty();        
}    
