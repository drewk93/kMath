const kMath = {

  factorial(n) {
    // Edge Cases
    if (typeof n !== "number" || !Number.isInteger(n)) throw new Error("Input must be a non-negative integer");
    if (n < 0) throw new Error("Input must be a non-negative integer");
    // Base Case
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1); // Recursive case
  },
  
  fibonacci(n, memo = {}) {
    // Edge Cases
    if (typeof n !== "number") throw new Error("Input type must be a number");
    if (n < 0) throw new Error("Input must be a non-negative integer");
    // Base Cases
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    return memo[n];
  },

  silverRatio(n){

  },

  slope(x1, y1, x2, y2) {
    // Edge Case
    if (x1 === x2) {
      throw new Error("The x-values must be different to calculate the slope.");
    }
    return (y2 - y1) / (x2 - x1);
  }




};

console.log(kMath.factorial(5))

module.exports = kMath;

