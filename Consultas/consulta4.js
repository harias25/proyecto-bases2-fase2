db.getCollection("proyecto").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    // enter query here
			    "date" : {
			        $gt:ISODate("2020-12-01"), 
					$lt:ISODate("2021-01-31")
					}   
			}
		},

		// Stage 2
		{
			$group: {
			    _id: "$location",
			    "acel_positivos" : { "$avg": "$reproduction_rate"}
			}
		},

		// Stage 3
		{
			$sort: {
			    "acel_positivos": -1.0
			    
			}
		},
	],

	// Options
	{

	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
