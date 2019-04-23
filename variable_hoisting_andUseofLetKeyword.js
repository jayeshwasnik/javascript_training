//here there is variable undefined due to variable hoisting
console.log(myVar);
var myVar=2000;
/*
//here we get varaible not defined as the variable is not hoisted
console.log(myLetVar);
let myLetVar=2000;
*/
var x=1;
for(x=0;x<10;x++){
	console.log(x);
}
//here note that after x=9,the for loop increments the value of variable and then checks the comdition,so the value of x is incremented one more time than expected,also the value of var x is not limited to the scope of for loop
console.log("the value of x after loop is " + x);


let y=1;
let a=1;
let myArray=[1];
if(a=1){
	a++;
}
for(let y=0;y<10;y++){
	var z=10;
	y++;
	//let j=11; couldn't be used outside so commented
	console.log(y);
	let arrayInsideFor=[2]
	myArray.push(2);
	//let y=11; if you uncomment it will give variable not defined exception
}
//here note that after y=9,the for loop increments the value of variable and then checks the comdition,so the value of y is incremented one more time than expected,also the value of var y is  limited to the scope of for loop because of let keyword
console.log("the value of y after loop is " + y);
console.log(z);
console.log(myArray);
console.log("the value of a,which was defined with let, which was inside if loop " + a);
//console.log(arrayInsideFor); can't access it outside for
//console.log(j); will give undefined error because of use of let
