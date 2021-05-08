var con = function(infectMENOR, infectMAYOR){
return db.getCollection("proyecto").aggregate(

	[
		{
			$match: {
			    total_cases: {$gt: infectMENOR, 
                       		$lt: infectMAYOR
                },
			    location:{$nin:["World","Asia","South America","Europe","European Union","North America","Oceania","Africa",""]}
			}
		},

		{
			$project: {
			    location:1,date:1,total_cases:1
			}
		},
	],

	{

	}

);

};

print(JSON.stringify(con(200,300)));