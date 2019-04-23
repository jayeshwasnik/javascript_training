
let exp=0;
function exponenet(base,input)
{ if(input/base===1){
	return;
	}
	if (input/base>1){
		//let x=1;
		exp++;
	}
	return exponenet(base,input/base);

}
exponenet(5,625);
alert(exp);
//alert(x);