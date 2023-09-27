console.log("this thing works!");

//a function is either being defined or declared - creating the usable block of code to be used at a later time in the program.
function sayHello(){
// write the code to say hello here. you need to put the variable inside the curly brackets
console.log(`Hello ${sayHello}`)
}

//execute the function, invoke the function, or call the function

//write the functions name()
//sayHello(personsName);

//think of a function or a block of code like a set of instructions.
//parameter

function sayGoodbye(phrase,personsName) {
console.log(`${phrase} , ${personsName}`)
}

sayGoodbye('adios', 'Laura');
sayGoodbye('chao', 'Becky');
sayGoodbye('adios', 'Chad');
sayGoodbye('Peace', 'Frankie');


// return produces a value for the function when it is called. But, console.log only prints.

function getPlayerUsername(username){
    return username;
}


// before the game we don't know the players name
let playerOne;
let playerTwo;
let playerThree;
let playerFour;

// after they join the game we want to set the players name

console.log getPlayerUsername(dennelle)
