db.getCollection("covid").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			
			    "date" : { 
			                             $gt:ISODate("2021-04-03"), 
			                             $lt:ISODate("2021-05-03")}
			}
		},

		// Stage 2
		{
			$group: {
			    _id: "$location",
			    "pruebas":{
			            "$sum": "$new_tests"
			    }
			}
		},

		// Stage 3
		{
			$sort: {
			    "pruebas":-1
			}
		},

		// Stage 4
		{
			$limit: // positive integer
			 10
		},
	],

	// Options
	{

	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
