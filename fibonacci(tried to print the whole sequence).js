//fibonacci of 1st n numbers
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
var array1=[];
var array2=[];
array2.push(0);
array2.push(1);
a=0;
b=1;
array2.push(array2[a]+array2[b]);

var fibonacci=function(n){
	return fibonacci(n-1);
	if (n===0){
		array1.push(0);
		return;
	}
	if(n===1){
		array1.push(1);
		return;
	}
	if(n>1){
		
		array1.push(array1[n-1]+array1[n-2]);
		return;
	}

	

}

fibonacci(1);
console.log(array1);
console.log(array2);