require('jasmine');
const baby_steps = require('../baby_steps');

describe('baby_steps', () => {

    it('prints the sum of numbers to the console', () => {
        process.argv[2] = "2";
        process.argv[3] = "3";
        process.argv[4] = "4";
        const expected = 9;
        const actual = baby_steps();
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(expected).toBe(actual);
      });
})

/**
 * NOTES: this test was a challenge.  The function baby_steps takes 
 * command line arguments in the form of process.argv[i] = "x"
 * so at the terminal $ baby_steps 1 2 3 retuns 6
 * In my spec, I just faked the arguments like so: 
 * Remember, process.argv[0] and process.argv[1] contains the whole 
 * command line ['node', 'baby_steps.js', ...]
 * process.argv[2] = "2";
 * process.argv[3] = "3";
 * process.argv[4] = "4";
 */