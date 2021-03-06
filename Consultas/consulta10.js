db.getCollection("proyecto").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    // enter query here
			    "location":{$in:["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Puerto Rico", "Dominic Republic", "Uruguay0","Venezuela"]},
			    "date" : { 
			                             $gt:ISODate("2020-12-01"), 
			                             $lt:ISODate("2021-01-01")}
			}
		},

		// Stage 2
		{
			$group: {
			    _id: "$location",
			    "infectados":{
			            "$sum": "$new_cases"
			    }
			}
		},

		// Stage 3
		{
			$sort: {
			    "infectados":-1
			}
		},
	],

	// Options
	{

	}



);
