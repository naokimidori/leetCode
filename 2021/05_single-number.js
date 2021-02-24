/* 
  只出现一次的数字

  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
  说明：
  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:
  输入: [2,2,1]
  输出: 1

  示例 2:
  输入: [4,1,2,1,2]
  输出: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map();
  for (let x of nums) {
      if (map.has(x)) {
          map.delete(x);
      } else {
          map.set(x, 1);
      }
  }
  return [...map.keys()][0];
};

// 上面是第一次提交的解法，但是使用了额外的空间，不符合题意
// 下面是 js位运算的参考

/**
* @param {number[]} nums
* @return {number}
*/

//一个数和它本身异或结果为 0，一个数和 0 异或 结果还为其本身
var singleNumber = function(nums) {
  let res = 0;
  for(let num of nums)
      res ^= num;
  return res;
};

// 参考：
// https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/