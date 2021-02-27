/* 
  最长公共前缀

  编写一个函数来查找字符串数组中的最长公共前缀。
  如果不存在公共前缀，返回空字符串 ""。

  示例 1：  
      输入：strs = ["flower","flow","flight"]
    输出："fl"

  示例 2：
    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }

  // 1. 找到最短的值
  let min = strs[0];
  for (let x of strs) {
    if (x.length < min.length) {
      min = x;
    }
  }
  // 2. 定义一个指针
  let right = min.length;
  while (right > 0) {
    let prefix = min.slice(0, right);
    // 3. every匹配
    if (strs.every(item => item.indexOf(prefix) === 0)) {
      return prefix;
    }
    right--;
  }
  return ''
};

// 参考
// https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode-solution/