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
    if (x > z&&y) {
        return x;
    } else if (y > x&&z) {
        return y;
} else if (z > x&&y) {
        return z;
    }
}
console.log(maxOfThree(14,13,16));


// //3.
// function isCharAVowel


// //4.





// //5.
