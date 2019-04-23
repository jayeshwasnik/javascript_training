/*var TodaysDate=new Date(Date.now());
alert(TodaysDate)

TodaysDate2=new Date("2019-04-13")
alert(TodaysDate2)
alert(TodaysDate.getDate());
alert(TodaysDate.getDay());

for(i=num;i<Math.sqrt(num);i--){
    if(num%i===0){
        return false;
    
        
    }
    
    
}
return true;
if (num===1)
  {
    return false;
  }
  else if(num === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < num; x++)
    {
      if(num % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

*/

function factorial(n){
	var p=1;
	for(var x=n-1;x>0;x--)
    {
    	if(n%x===0)
    	{p=x;
    		break;}        
    }
    return p;


  
}
alert(factorial(6))