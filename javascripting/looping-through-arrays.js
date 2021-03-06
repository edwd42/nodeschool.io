// var pets = ['cat', 'dog', 'rat'];
// for(var i = 0; i < pets.length; i++){
//     pets[i] = pets[i] + 's';
// }

// console.log(pets);

// refactor for jasmine unit testing
var pets = ['cat', 'dog', 'rat'];
const looping = (pets, pet) => {
    return pets.map(pet => pet + 's');
};

module.exports = looping;

/**
 * # JAVASCRIPTING  
   
 ## LOOPING THROUGH ARRAYS (Exercise 14 of 19)  
   
  For this challenge we will use a for loop to access and manipulate a list  
  of values in an array.  
   
  Accessing array values can be done using an integer.  
   
  Each item in an array is identified by a number, starting at 0.  
   
  So in this array hi is identified by the number 1:  
   
     var greetings = ['hello', 'hi', 'good morning'];  
   
  It can be accessed like this:  
   
     greetings[1];  
   
  So inside a for loop we would use the i variable inside the square  
  brackets instead of directly using an integer.  
   
 ## The challenge:  
   
  Create a file named looping-through-arrays.js.  
   
  In that file, define a variable named pets that references this array:  
   
     ['cat', 'dog', 'rat'];  
   
  Create a for loop that changes each string in the array so that they are  
  plural.  
   
  You will use a statement like this inside the for loop:  
   
     pets[i] = pets[i] + 's';  
   
  After the for loop, use console.log() to print the pets array to the  
  terminal.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify looping-through-arrays.js  
   
###################################################

# JAVASCRIPTING

## LOOPING THROUGH ARRAYS (Exercise 14 of 19)

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

# SUCCESS! LOTS OF PETS!

 Now all the items in that pets array are plural!

 In the next challenge we will move from arrays to working with objects.

 Run javascripting in the console to choose the next challenge.

─────────────────────────────────────────────────────────────────────────────
 You've finished all the challenges! Hooray!

─────────────────────────────────────────────────────────────────────────────

 */
