let a=[1,2];
let b=[3,4];

let c=[...a,...b];

console.log(c);

let checker=(x,y)=>{
	return x*y;
}

console.log("the output of checker is  "+checker(...a));