require('jasmine');
const foodType = require('../../javascripting/object-properties');

describe('foodType', () => {

    it('return the types property of the food object', () => {
        let food = {  
            types: 'only pizza'  
        };
        const expected = 'only pizza';
        const actual = foodType(food);
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})
