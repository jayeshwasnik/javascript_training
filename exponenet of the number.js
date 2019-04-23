
var exp=0;
function exponenet(base,input)
{ if(input/base===1){
	return;
	}
	if (input/base>1){
		exp++;
	}
	return exponenet(base,input/base);

}
exponenet(5,5);
alert(exp);