//alert("testing the setup")
//checking for/in loop 
var choice=window.prompt("Do you want to check object or array of objects")

if(choice=="object")
{var myObject={name:"jayesh",surname:"wasnik",company:"HCL"}

for(x in myObject)
{alert(myObject[x])}
}
else if(choice=="array of objects")
{var array=[{name:"jayesh",surname:"wasnik",company:"HCL"},
			{name:"geet",surname:"wasnik",company:"inmobi"}]

for(x in array)
{alert(array[x].name)}

	
}
else
{alert("the input is not valid")}