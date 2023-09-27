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

//2.
function maxOfThree(x,y,z) {
    if (x > z && x > y) {
        return x;
    } else if (y > x && y > z) {
        return y;
} else if (z > x && z > y) {
        return z;
    }
}
console.log(maxOfThree(14,17,16));

//3.
function isCharAVowel(letter){
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') return true;
};
console.log(isCharAVowel('t'));

//4.
const sumArray = [1,2,3,4];
let sum =0;
for (i=0; i < sumArray.length; i++) {
    sum += sumArray[i]
};
console.log(sum);

//5.
const multiplyArray = [1,2,3,4];
let sum2 =0;
for (i=0; i < sumArray.length; i++) {
    sum2 = (sum2 * sumArray[i])
};
console.log(sum);

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

function numArgs(...nums) {
    return nums.length;
};
console.log(numArgs(7,8,12));
console.log(numArgs(7,8,12, 30, 25, 1));

//7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(){

}

console.log();

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.


//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
