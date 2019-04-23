var choice=window.prompt("what do you want object or array of objects")
if(choice=="object")
{
	var myObject={
		"_id": "591f9894d369931519ce358f",
		"__v": 0,
		"text": "A female cat will be pregnant for approximately 9 weeks - between 62 and 65 days from conception to delivery.",
		"updatedAt": "2018-01-04T01:10:54.673Z",
		"deleted": false,
		"source": "api",
		"used": false
	}n
	for(x in myObject)
	{
		alert(myObject[x])
	}
}
else if(choice=="array of objects"){
var myArray=[
	{
		"_id": "591f9894d369931519ce358f",
		"__v": 0,
		"text": "A female cat will be pregnant for approximately 9 weeks - between 62 and 65 days from conception to delivery.",
		"updatedAt": "2018-01-04T01:10:54.673Z",
		"deleted": false,
		"source": "api",
		"used": false
	},
	{
		"_id": "591f9854c5cbe314f7a7ad34",
		"__v": 0,
		"text": "It has been scientifically proven that stroking a cat can lower one's blood pressure.",
		"updatedAt": "2018-01-04T01:10:54.673Z",
		"deleted": false,
		"source": "api",
		"used": false
	}
]
for(x in myArray)
{alert(myArray[x].text)}
}
else{
	alert("wrong input")
}