/* 
  验证回文串

  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
  说明：本题中，我们将空字符串定义为有效的回文串。

  示例 1:
    输入: "A man, a plan, a canal: Panama"
    输出: true

  示例 2:
    输入: "race a car"
    输出: false
*/

/* 
  思路：将s去除空格、符号，并转为小写，使用双指针
  获取字符串指定下标的字符：str.charAt(index)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let temp = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let left = 0;
  let right = temp.length -1;

  while(left <= right) {
    if (temp.charAt(left) !== temp.charAt(right)) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

// 参考：
// https://leetcode-cn.com/problems/valid-palindrome/solution/yan-zheng-hui-wen-chuan-by-leetcode-solution/