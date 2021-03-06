const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
const arr = [1,2,3];
const plus = (value) => {
  return value + 1
}

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map(arr, plus)).toBe('object');
    });
  });
});


// describe('each', () => {
//  it('loop that applies a cb to each element forEach', () => {
//     const each = arrayFunctions.each;
//     expect(typeof each).toBe('array');
//  })
// })



