require('jasmine');
// const sayHello = require('../../javascripting/introduction');

// describe('Introduction', () => {
//     it('should have return hello', () => {
//         const word = 'hello';
//         console.log('the password is swordfish');
  
//         expect(sayHello(word)).toBe('helo');
//       });
// })

describe('Introduction', () => {
  it('should return hello', () => {
      // const word = 'hello';
      const sayHello = require('../../javascripting/introduction');
      // console.log('the password is swordfish');

      expect(sayHello).toBe('hello');
    });
})
