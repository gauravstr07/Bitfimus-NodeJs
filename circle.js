class Circle {
  area(r) {
    return Math.PI * r * r;
  }
  circumference(r) {
    return 2 * Math.PI * r;
  }
}

// exports.area = function (r) {
//   return Math.PI * r * r;
// };

// exports.circumference = function (r) {
//   return 2 * Math.pi * r;
// };

module.exports = Circle;
