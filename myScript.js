
var myVar="I am going to rock the coding world"+"  Noone can stop me"+' \n notice the use of + and backslash n';
var myVar2="sabka badla lega re"+' \n tera faisal';
var myBooleanVar=true;
var thisHasNoValue;
var checkingNull=null;

alert(myVar+" "+ myVar2+myBooleanVar);
alert(thisHasNoValue);//it gives the output as undefined
alert(checkingNull);
//objects:
var foodItems={"itemType":"coffee",
				"itemName":"Espresso",
				"Cost":200}
				
var costOfItem=foodItems.Cost+200;
alert(costOfItem);

//Arrays
var array=["jayesh","sunil","wasnik",23]
//accessing array
var accessArray=array[0];
alert(accessArray);

//length of array
var arrayLength=array.length;
alert(arrayLength);

//arrays of objects

var arrayOfObjects=[
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

var i=0
for (j=0;j<=arrayOfObjects.length-1;j++)
{
var getCatInfo=arrayOfObjects[i].text;
console.log(getCatInfo)
i=i+1;
}

