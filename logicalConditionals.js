var marksObtained=window.prompt("tell the marks obtained by the user")
alert(typeof(marksObtained))
if (marksObtained==undefined || marksObtained==null || marksObtained=='')
	alert("give a valid input")
else if(marksObtained<0 || marksObtained>100)
	alert("give a number between 0 to 100")
else{
marksObtained=Number(marksObtained)//because by default the input is string here
var percentage=(marksObtained/100)*100

var result=(percentage>90) ?"topper":"loser";
alert(result)
}