// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var filtered = numbers.filter(evenNumbers);
// function evenNumbers (number) {  
//     return number % 2 === 0;  
// }

// refactor for jasmine unit testing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = (arr, query) => {
    return arr.filter(el => el % 2 == 0);
};

console.log(filtered(numbers));

module.exports = filtered;

/**
 * # JAVASCRIPTING  
   
 ## ARRAY FILTERING (Exercise 12 of 19)  
   
  There are many ways to manipulate arrays.  
   
  One common task is filtering arrays to only contain certain values.  
   
  For this we can use the .filter() method.  
   
  Here is an example:  
   
     var pets = ['cat', 'dog', 'elephant'];  
       
     var filtered = pets.filter(function (pet) {  
       return (pet !== 'elephant');  
     });  
   
  The filtered variable will now only contain cat and dog.  
   
 ## The challenge:  
   
  Create a file named array-filtering.js.  
   
  In that file, define a variable named numbers that references this array:  
   
     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
   
  Like above, define a variable named filtered that references the result of  
  numbers.filter().  
   
  The function that you pass to the .filter() method will look something  
  like this:  
   
     function evenNumbers (number) {  
       return number % 2 === 0;  
     }  
   
  Use console.log() to print the filtered array to the terminal.  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify array-filtering.js  
   
 ─────────────────────────────────────────────────────────────────────────────  
  Need help? View the README for this workshop:  
  (http://github.com/sethvincent/javascripting)  
   
 ───────────────────────────────────────────────────────────────────────────── 

 ###########################################

 # JAVASCRIPTING

## ARRAY FILTERING (Exercise 12 of 19)

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

# FILTERED!

 Good job filtering that array.

 In the next challenge we will work on an example of accessing array
 values.

 Run javascripting in the console to choose the next challenge.

─────────────────────────────────────────────────────────────────────────────
 You've finished all the challenges! Hooray!

 */
