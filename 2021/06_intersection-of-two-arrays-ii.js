/* 
  两个数组的交集 II

  给定两个数组，编写一个函数来计算它们的交集。

  示例 1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2,2]

  示例 2:
  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[4,9]

  说明：
  • 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
  • 我们可以不考虑输出结果的顺序。

  进阶：
  • 如果给定的数组已经排好序呢？你将如何优化你的算法？
  • 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
  • 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  let [arr1, arr2] = [nums1, nums2];
  if(nums1.length > nums2.length) {
    [arr1, arr2] = [nums2, nums1];
  }
  // 记录短数组arr1每个元素出现的次数
  let map = new Map();
  for(let x of arr1) {
    let cur = map.get(x);
    if (cur) {
      map.set(x, cur+1);
    } else {
      map.set(x, 1);
    }
  }

  // 遍历长数组arr2
  for(let y of arr2) {
    let cur = map.get(y);    
    if (cur && cur > 0) {
      result.push(y);
      map.set(y, cur -1);
    }
  }

  return result;
};

// 参考：
// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/liang-ge-shu-zu-de-jiao-ji-ii-by-leetcode-solution/