var array=[
{name:"jayesh",
email:"jayesh@edwisor.com",
mobile:7338789041,
password:"jayesh"
},
{name:"nikesh",
email:"nikesh@edwisor.com",
mobile:7338789041,
password:"nikesh"
},
{name:"sudesh",
email:"sudesh@edwisor.com",
mobile:7338789041,
password:"sudesh"
}
]

var loginCheck=function(email,password,arrayList){
	for(emailId in arrayList)
		if(arrayList[emailId].email==email && arrayList[emailId].password==password)
		{alert("You are registered user")
		break;}
	else if(arrayList[emailId].email==email && arrayList[emailId].password!=password)
		{alert("password doesn't match")
		break;}
		else{alert("email unregistered")
	break;}	  
}

loginCheck("jayesh@edwisr.com","jaysh",array);
