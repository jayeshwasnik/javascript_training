var myArray=['jayesh','akansha','yami','esha','shimpli','heer'];
var originalArray=myArray.slice();
var convertedToString=myArray.toString();
alert(convertedToString+convertedToString.length);
var regex=/[\,]/gi;
var formattedValue=convertedToString.replace(regex,'');
alert(formattedValue)

myArray.pop();
alert(myArray)

myArray.push("Sonali","Eva Mendez");
alert(myArray)
alert(originalArray)


myArray=myArray.concat(originalArray);
alert(myArray)

