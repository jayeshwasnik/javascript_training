var numberOfPurchases=window.prompt("Enter the number of items you have purchased")

if(numberOfPurchases>3) {
	alert("you have got a promo code")
} else if(numberOfPurchases==3){
	alert("purchase one more to get a promo code")
} else{
	alert("you do not get a promo code")
}
