var input=window.prompt("give the number you want the factorial");
var factorial=function(n){
	//4*3*2*1
	if(n<1){
		return; 
	}
	if(n===1){
		return 1;
	}
return n*factorial(n-1);
}

alert(factorial(input));