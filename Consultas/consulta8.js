
var con = function(fecha){
return db.getCollection("proyecto").aggregate(

	[
		{
			$match: {
			    date:ISODate(fecha),
			    location:{$nin:["World","Asia","South America","Europe","European Union","North America","Oceania","Africa",""]}
			}
		},

		{
			$project: {
			    location:1,new_deaths:1,date:1
			}
		},

		{
			$sort: {
			    new_deaths:-1
			}
		},

		{
			$limit: 
			 1
		},
	],

	{

	}

);

};

print(JSON.stringify(con("2020-12-01")));
