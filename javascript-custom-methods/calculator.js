/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },

  divide(x, y) {
    return x / y;
  },

  getAverage(numbers) {
    var length = numbers.length;
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / length;
  },

  multiply: function (x, y) {
    return x * y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  square: function (x) {
    return x * x;
  },

  sumAll(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
};
