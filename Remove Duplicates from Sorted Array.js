var removeDuplicates = function(nums) {
  var set = new Set(nums);
  let i = 0;
  for (let item of set) {
    nums[i++] = item;
  }

  return i;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
