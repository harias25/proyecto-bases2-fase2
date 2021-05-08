var consulta_7 = function(date1,date2)
{ 
  
return db.getCollection("covid").aggregate(

	[
		{
			$match: {			
			    "date" : { 
			                             $gt:ISODate(date1), 
			                             $lt:ISODate(date2)}}
		},
		{
			$group: {
			    _id: "$location",
			    "pruebas":{
			            "$sum": "$new_tests"
			    }
			}
		},

		{
			$sort: {
			    "pruebas":-1
			}
		},

		{
			$limit: // positive integer
			 10
		},
	]

);
};
print("Consulta 7 cargada exitosamente");
print(JSON.stringify(consulta_7("2021-04-03","2021-05-03")));

