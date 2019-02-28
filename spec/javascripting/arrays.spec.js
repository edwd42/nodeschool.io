require('jasmine');
const arrays = require('../../javascripting/arrays');

describe('Arrays', () => {

    it('should return an array', () => {
        let pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];
        const expected = pizzaToppings;
        const actual = arrays(pizzaToppings);
        console.log(expected, actual);
  
        expect(actual).toBe(expected);
      });
})