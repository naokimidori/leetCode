/* 
  有效的字母异位词

  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

  示例 1:
    输入: s = "anagram", t = "nagaram"
    输出: true

  示例 2:
    输入: s = "rat", t = "car"
    输出: false

  说明:
    你可以假设字符串只包含小写字母。
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let _s = s.split('').sort().join('');
  let _t = t.split('').sort().join('');
  if (_s !== _t) {
    return false;
  }
  return true;
};
// 参考：
// https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode-solution/