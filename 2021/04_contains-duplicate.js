/* 
  存在重复元素

  给定一个整数数组，判断是否存在重复元素。
  如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

  示例 1:
  输入: [1,2,3,1]
  输出: true

  示例 2:
  输入: [1,2,3,4]
  输出: false

  示例 3:
  输入: [1,1,1,3,3,4,3,2,4,2]
  输出: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let cur = map.get(nums[i]);
      if (cur && cur === 1) {
          map.set(nums[i], 2);
      } else {
          map.set(nums[i], 1);
      }
      
      if (map.get(nums[i]) > 1) {
          return true;
      }
  }

  return false;
};

// 或者用Set，这种其实更好
var containsDuplicate = function(nums) {
  const set = new Set();
  for (const x of nums) {
      if (set.has(x)) {
          return true;
      }
      set.add(x);
  }
  return false;
};

// 参考：
// https://leetcode-cn.com/problems/contains-duplicate/solution/cun-zai-zhong-fu-yuan-su-by-leetcode-sol-iedd/