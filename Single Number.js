//Given a non-empty array of integers, every element appears twice except for one. Find that single one. Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//Input: [2,2,1]
//Output: 1

var singleNumber = function(nums) {
  nums = nums.sort();
  for (i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 2);
      i = 0;
    }
  }
  return nums[0];
};
