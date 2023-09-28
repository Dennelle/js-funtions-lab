// console.log("this thing works!");

// //a function is either being defined or declared - creating the usable block of code to be used at a later time in the program.
// function sayHello(){
// // write the code to say hello here. you need to put the variable inside the curly brackets
// console.log(`Hello ${sayHello}`)
// }

// //execute the function, invoke the function, or call the function

// //write the functions name()
// //sayHello(personsName);

// //think of a function or a block of code like a set of instructions.
// //parameter

// function sayGoodbye(phrase,personsName) {
// console.log(`${phrase} , ${personsName}`)
// }

// sayGoodbye('adios', 'Laura');
// sayGoodbye('chao', 'Becky');
// sayGoodbye('adios', 'Chad');
// sayGoodbye('Peace', 'Frankie');


// // return produces a value for the function when it is called. But, console.log only prints.

// function getPlayerUsername(username){
//     return username;
// }


// // before the game we don't know the players name
// let playerOne;
// let playerTwo;
// let playerThree;
// let playerFour;

// // after they join the game we want to set the players name

// console.log getPlayerUsername(dennelle)

/* Requirements
Define and code the functions below.
Define the functions using the approach as specified (either as a function expression or declaration).
Be sure to number each function with a comment above it.
After each function, call it at least once and console.log the results.

 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }

  console.log(maxOfTwoNumbers(3, 9));*/

  //1.
  function maxOfTwoNumbers(x,y){
    if (x >= y) {
        return x;
      } else {
        return y;
      }

  }
  console.log(maxOfTwoNumbers(10,7))

//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// function maxOfThree(x,y,z) {
//     if (x > z && x > y) {
//         return x;
//     } else if (y > x && y > z) {
//         return y;
// } else if (z > x && z > y) {
//         return z;
//     }
// }
// console.log(maxOfThree(14,17,16));


//2.
let maxOfThree = function(x,y,z) {
    if (x > z && x > y) {
        return x;
    } else if (y > x && y > z) {
        return y;
} else if (z > x && z > y) {
        return z;
    }
}
console.log(maxOfThree(14,17,16));

//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// function = keyword isCharAVowel = function name that is used to call/invoke/execute the function ()<-- is the parameter that the argument passes through.
function isCharAVowel(letter){
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
} else {return false;
}}
//here is where I call the function by the name.
console.log(isCharAVowel ('f'));

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

//I believe this knows to get the numbers from the sumArray because it is an expression and the variable has to be assigned before the function.
const sumArray = [1,2,3,4];

let total = function(array){
 let sum = 0;
 for (let i=0; i < array.length; i++) {
    sum += sumArray[i]
    }
   return sum
};

console.log(total(sumArray));

//5 Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

const multiplyArray = [1,2,3,4];
function totalArray(num){
    let sum = 1;
    for (let i=0; i < num.length; i++)
    { sum = sum * multiplyArray[i]
    }
    return sum
};

console.log(totalArray(multiplyArray))

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function(...nums) {
    return nums.length;
};
console.log(numArgs(7,8,12));
console.log(numArgs(7,8,12,30,25,1));

//7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

//created the declarative function
function reverseString(string){
    //I need to create an array that splits all the letters in the string, so I have to create a new variable splits called arrayStrings.
    const arrayStrings = string.split('');
    //now that strings are split you have to reverse each letter using this method .reverse and you need to create a new variable to show this step by using the previous step.
    const reversingArray = arrayStrings.reverse();
    //the next step is to join the split variables back together using a method called join. You need to name this step by creating a variable using the previous step.
    const joinArray = reversingArray.join('');
    //you need to return the final step in the process because it includes all the information.
    return joinArray;
};

// // taking input from the user
// const string = prompt('Enter a string: ');

// const result = reversingString(string);
// console.log(result);

console.log(reverseString('I love my son Luke'));

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.


//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
