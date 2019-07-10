var flipAndInvertImage = function(A) {
  return A.map(a => a.reverse().map(x => (x == 0 ? 1 : 0)));
};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
