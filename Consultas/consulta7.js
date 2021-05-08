var consulta_7 = function()
{ 
  
return db.getCollection("proyecto").aggregate(

	[

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
print(JSON.stringify(consulta_7()));

