var myString="Jayesh is very awesome and special guy";
var stringLength=myString.length;
alert(stringLength)
//answer 38,it counts spaces also

var indexString=myString.indexOf("s");
alert(indexString);
//answer is 4
indexString=myString.indexOf("samosa");
alert(indexString)
//answer is -1 as the string is not present

var sliceString=myString.slice(0,5);
alert(sliceString);
//the upper end of arguments is normal counting value 
var indexSpecial =myString.indexOf("special");
var sliceSpecial=myString.slice(indexSpecial,indexSpecial+6);
alert("sliced string is "+sliceSpecial);

var sentenceToArray=myString.split(" ");
alert(sentenceToArray);
var myArray=['j','a','y','e','s','h'];
alert(myArray)

var convertedToNumber=Number(myString)
alert(convertedToNumber)