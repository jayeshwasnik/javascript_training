var a=window.prompt("starting point")
var b=window.prompt("ending point")
var array=[];
var ranger=function(x,y){
	if(x===y )
		{return ;}
	if(x+1<y)
	{
		array.push(x+1);
	}
	return ranger(x+1,y);
}
ranger(a,b);
alert(array);
