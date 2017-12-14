var lookup =
{
	"$lookup" : {
		"from" : "companies",
		"localField" : "company_id",
		"foreignField" : "_id",
		"as" : "TestResults"
	}
}


var addfields =
{
	"$addFields" : {
		"sector" : "$TestResults.sector",
		"company" : "$TestResults.name"
	}
}


var unwind = {$unwind: "$TestResults"}

var project = 
{
	"$project" : {
		"first_name" : 1,
		"last_name" : 1,
		"sector" : 1,
		"company" : 1,
		"_id" : 0,
		"job" : 1
	}
}


db.createView("peopleSectors","people",[lookup, unwind, addfields, project])
