function additivePersistence(num) {
  countOfAddition = 0;
  do {
    digits = num.toString().split("");
    realDigits = digits.map(c=>parseInt(c,10));

    sum = realDigits.reduce(
      (accumulator, currentValue)=>accumulator + currentValue, 0
    );
    countOfAddition ++;
    num = sum;
  } while (sum >= 10);

  return countOfAddition;
}
additivePersistence(1234);
console.log(countOfAddition, digits, realDigits, sum);


(function(){
	// Example 1
  // only works with var!
  console.log(x === undefined);
	var x = 3;
  // what would happen if we removed the above line?
  
  // Example 2
  banana();
	function banana() {
  	console.log("hello, banana");
  }


  console.log(foo);
})();