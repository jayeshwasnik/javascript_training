var x=1;
for(x=0;x<10;x++){
	console.log(x);
}
//here note that after x=9,the for loop increments the value of variable and then checks the comdition,so the value of x is incremented one more time than expected
console.log("the value of x after loop is " + x);