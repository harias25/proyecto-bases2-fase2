db.getCollection("proyecto").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    "date":{
			            $gt:ISODate("2020-02-24"), 
			    		$lt:ISODate("2021-05-24")
			    	} 
			}
		},

		// Stage 2
		{
			$group: {
			     _id: "$location",
			    "contagios" : { "$avg": "$positive_rate"}
			}
		},

		// Stage 3
		{
			$sort: {
			    "contagios": -1.0
			}
		},
	],

	// Options
	{

	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
