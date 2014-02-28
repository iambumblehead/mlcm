// Filename: mlcm.spec.js  
// Timestamp: 2014.02.15-10:21:52 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var mlcm = require('../mlcm');

describe("mlcm.gcd", function () {

  it("should return 2 for [2,4,12]", function () {  
    expect( mlcm.gcd([2, 4, 12]) ).toBe( 2 );
  });

  it("should return 1 for [5,4,40]", function () {  
    expect( mlcm.gcd([5, 4, 40]) ).toBe( 1 );
  });

});

describe("mlcm", function () {

  it("should return 12 for [2,4,3,12]", function () {  
    expect( mlcm([2, 4, 3, 12]) ).toBe( 12 );
  });

  it("should return 6 for [2,3]", function () {  
    expect( mlcm([2, 3]) ).toBe( 6 );
  });

});
