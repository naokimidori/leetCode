/* 
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
  
  示例 1：
    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]

  示例 2：
    输入：nums1 = [1], m = 1, nums2 = [], n = 0
    输出：[1]

  提示：
    • nums1.length == m + n
    • nums2.length == n
    • 0 <= m, n <= 200
    • 1 <= m + n <= 200
    • -109 <= nums1[i], nums2[i] <= 109
*/

// 解法一：经典思路，先放在同一数组，然后sort一次
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums2.forEach((item, i) => {
      nums1.splice(m + i, 1, item);
  });
  nums1.sort((a, b) => a - b);
};

/* 解法二：
    定义一个数组依次存放，定义两个指针，
    循环比较num1和nums2每一项，较小的放入数组，指针+1
    最后谁没有放完的依次放入数组即可。 */
var merge = function(nums1, m, nums2, n) {
  const mergedArr = [];
  let p1 = 0, p2 = 0;
  while (p1 < m && p2 < n) {
      if (nums1[p1] > nums2[p2]) {
          mergedArr.push(nums2[p2]);
          p2++;
      } else {
          mergedArr.push(nums1[p1]);
          p1++;
      }
  }
  if (p1 === m) {
      mergedArr.push(...nums2.slice(p2, n));
  }
  if (p2 === n) {
      mergedArr.push(...nums1.slice(p1, m));
  }
  for (let i = 0; i < m + n; i++) {
      nums1[i] = mergedArr[i];
  }
};

// 参考：
// https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetcode/