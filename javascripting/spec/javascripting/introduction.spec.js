require('jasmine');
const sayHello = require('../../javascripting/introduction');

describe('Introduction', () => {
    it('should have return hello', () => {
        const word = 'hello';
  
        expect(sayHello(word)).toBe('hello');
      });
})

