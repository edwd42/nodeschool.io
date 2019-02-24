// var pizza = 'pizza is alright';
// pizza = pizza.replace('alright','wonderful');
// console.log(pizza);

// refactor for jasmine unit testing
module.exports = function revisingStrings(someString){
    let revisedString = someString.replace('alright','wonderful');
    console.log(someString + " => " + revisedString);
    return revisedString;
 }

/**
 * # JAVASCRIPTING

## REVISING STRINGS (Exercise 5 of 19)

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

# YES, PIZZA IS WONDERFUL.

 Well done, with that .replace() method!

 Next we will explore numbers.

 Run javascripting in the console to choose the next challenge.

─────────────────────────────────────────────────────────────────────────────
 You've finished all the challenges! Hooray!

─────────────────────────────────────────────────────────────────────────────
 Need help? View the README for this workshop:
 (http://github.com/sethvincent/javascripting)
 */
