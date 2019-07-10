var reverse = function(x) {
  var reversed = x
    .toString()
    .split("")
    .reverse()
    .join("");
  reversed = parseInt(reversed) * Math.sign(x);

  if (reversed < Math.pow(2, 31) * -1 || reversed > Math.pow(2, 31) - 1)
    return 0;
  return parseInt(reversed);
};
