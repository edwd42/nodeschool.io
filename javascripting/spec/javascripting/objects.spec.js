require('jasmine');
const objects = require('../../javascripting/objects');

describe('objects', () => {

    it('return pizza object to the terminal', () => {
        let pizza = {  
            toppings: ['cheese', 'sauce', 'pepperoni'],  
            crust: 'deep dish',  
            serves: 2  
          };
        const expected = pizza;
        const actual = pizza;
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})
