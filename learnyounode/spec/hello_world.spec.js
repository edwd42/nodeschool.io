require('jasmine');
const hello_world = require('../hello_world');

describe('objects', () => {

    it('prints the text "HELLO WORLD" to the console', () => {
        const expected = "HELLO WORLD";
        const actual = hello_world();
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(expected).toBe(actual);
      });
})