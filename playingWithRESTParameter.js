dataBook=[];

let addToAddress=(userId,...address)=>{
console.log(address)
dataBook.push({userId:userId,userAddress:address});

}

let address1={ "address" : "123 Maple Street",
               "city" : "Pretendville",
               "state" : "NY",
               "zip"   : "12345" };

let address2={ "address" : "234 Maple Street",
               "city" : "Pretendville",
               "state" : "CN",
               "zip"   : "12325" };

addToAddress("jayesh",address1,address2);  

console.log(dataBook); 
console.log(dataBook[0].userAddress[1].state);            

