/* 
  两数之和

  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
  你可以按任意顺序返回答案。

  示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

  示例 2：
    输入：nums = [3,2,4], target = 6
    输出：[1,2]

  示例 3：
    输入：nums = [3,3], target = 6
    输出：[0,1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  let result = [];
  
  nums.forEach((item, index) => {
    map.set(item, index);
  });

  for (let i = 0; i < nums.length; i++) {
    let curNeed = target - nums[i];
    let mapIndex = map.get(curNeed);
    if (map.has(curNeed) && i !== mapIndex) {
      result.push(i, mapIndex);
      return result;
    }
  }
};

// 优化为一次循环
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curNeed = target - nums[i];
    if (map.get(curNeed) !== undefined) {
      return [i, map.get(curNeed)];
    }
    map.set(nums[i], i);
  }
};

// 参考：
// https://leetcode-cn.com/problems/two-sum/solution/js-mapdui-xiang-chu-li-liang-shu-zhi-he-by-mike-wu/