const student_name = "Chuan-Hsin Chen";

// ====== PROBLEM 1 - findBiggestNumber ======

function findBiggestNumber(map) {
  let biggestNumber = Number.NEGATIVE_INFINITY;
  for (let array of map) {
    for (let num of array) {
      // Check "undefined":  https://stackoverflow.com/a/2779104
      if (typeof(num) !== "undefined") {
        if (num !== null) {
          if (num > biggestNumber) {
            biggestNumber = num;
          }
        }
      }
    }
  }
  if (biggestNumber === Number.NEGATIVE_INFINITY) {
    return undefined;
  }
  return biggestNumber;
}


// ====== PROBLEM 2 - balancedString ======

function balancedString(str) {
	/* Edge case :
		 "",  empty string;
  	 "xxxx", only one distinct character */
     
	// Count the occurrence of each distinct character
  const countMap = {};
  for (let char of str) {
    if (char in countMap === false) {
      countMap[char] = 1;
    } else {
      countMap[char] += 1;
    }
  }

  // Extract the count values from countMap, and put into an array
  // (Since ES2020, the order of iteration over object keys is deterministic 
  // and follows a certain set of rules: https://stackoverflow.com/a/58444013)
  const countArray = [];
  for (char in countMap) {
    countArray.push(countMap[char]);
  }
  
  // Check if each number in array is equal
  let i = 0;
  while (i < countArray.length - 1) {
  	if (countArray[i] !== countArray[i+1]) {
    	return false;
    }
    i ++;
  }
  
  return true;
}



// ====== PROBLEM 3 - additivePersistence ======

function additivePersistence(num) {
  let countOfAddition = 0;
  let sum; 
  // NOTE: sum has to be declared here s.t. it can be accessed in while condition.
  // Inside the do..while loop, sum should not be redeclared, but should only be updated.

  do {
    let digits = num.toString().split("");
    let realDigits = digits.map(c=>parseInt(c,10));

    sum = realDigits.reduce(
      (accumulator, currentValue)=>accumulator + currentValue, 0
    );
    countOfAddition ++;
    num = sum;
  } while (sum >= 10);

  return countOfAddition;
}

// ====== Alternative solution ======
// function additivePersistence(num) {
//   let countOfAddition = 0;

//   while(true) {
//     let digits = num.toString().split("")
//     let realDigits = digits.map(c=>parseInt(c,10));

//     // Since sum is not used in while condition,
//     // it doesn't have to be declared before entering the loop block.
//     let sum = realDigits.reduce(
//       (accumulator, currentValue)=>accumulator + currentValue, 0
//     );
//     countOfAddition ++;
//     num = sum;
//     if (sum < 10) {
//       break;
//     }
//   }

//   return countOfAddition;
// }


/* Mysterious code: no errors without declaration? -->
   When not using any keyword to declare a variable,
   it will by default become a global variable,
   which is a bad practice since it pollutes the global name space*/

// function additivePersistence(num) {
//   countOfAddition = 0;
//   do {
//     digits = num.toString().split("");
//     realDigits = digits.map(c=>parseInt(c,10));

//     sum = realDigits.reduce(
//       (accumulator, currentValue)=>accumulator + currentValue, 0
//     );
//     countOfAddition ++;
//     num = sum;
//   } while (sum >= 10);

//   return countOfAddition;
// }

// additivePersistence(1234);
// console.log(countOfAddition);




// TEST 1 - findBiggestNumber
const grid1 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12]
]

const grid2 = [
    [1, 1, 4, 1],
    [1, 6],
    [1, 2, 1, -3],
]

const grid3 = [
    [1, null, 1, null],
    [1, 0],
    [1, 2, 1, undefined],
]

const grid4 = [
    [-1, null],
    [],
    [0, -2, -1],
]

const grid5 = [
    [],
    [],
    [],
]

console.log("Starting tests for " + student_name);

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12"); 
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(findBiggestNumber(grid4) === 0, "biggest number should be 0");
console.assert(findBiggestNumber(grid5) === undefined, "biggest number response should be undefined");


// TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced")
console.assert(balancedString("xxxyyyzzzz") === false, '"xxxyyyzzzz" is not balanced')
console.assert(balancedString("abccbaabccba") === true, '"abccbaabccba" is balanced')
console.assert(balancedString("abcdefghijklmnopqrstuvwxyz") === true, '"abcdefghijklmnopqrstuvwxyz" is balanced')
console.assert(balancedString("pqq") === false, '"pqq" is not balanced')
console.assert(balancedString("fdedfdeffeddefeeeefddf") === false, '"fdedfdeffeddefeeeefddf" is not balanced')
console.assert(balancedString("www") === true, '"www is balanced')
console.assert(balancedString("x") === true, '"x" is balanced')
console.assert(balancedString("") === true, "'' is balanced")


// TEST 3 - additivePersistence
console.assert(additivePersistence(1234) === 2, 'the additive 1234 should be 2')
console.assert(additivePersistence(13) === 1, 'the additive 13 should be 1') 
console.assert(additivePersistence(9876) === 2, 'the additive 9876 should be 2')
console.assert(additivePersistence(199) === 3, 'the additive 199 should be 3')
console.assert(additivePersistence(1679583) === 3, 'the additive 1679583 should be 3')

console.log("code execution complete - if no errors are listed above, you are good to go!")
