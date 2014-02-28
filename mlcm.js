// Filename: mlcm.js
// Timestamp: 2014.02.15-10:22:09 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires:


var mlcm = ((typeof module === 'object') ? module : {}).exports = (function (p) {

  function gcd (numbers) {
    return numbers.reduce(function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    });
  }

  function lcm (numbers) {
    return numbers.reduce(function(a, b) {
      return Math.abs(a * b) / gcd([a, b]);
    });
  }

  p = lcm;
  p.lcm = lcm;
  p.gcd = gcd;

  return p;

}());
