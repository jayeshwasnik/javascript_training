//we havet o print integers in the range ,make an array startignbased on inputs given
// it is working fine
var array1= [];
function ranger(x,y){
	
	if(x===y){
		return 1;
	}
	if(x==(y-1))
	{return 1;}
	if(x<y){
		//alert("inside pusher")
	array1.push(x+1);
	}
	return ranger(x+1,y);

}

ranger(2,9);

alert(array1);
