/* 

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：
s = "leetcode"
  返回 0

s = "loveleetcode"
  返回 2
  提示：你可以假定该字符串只包含小写字母。
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  let arr = s.split('');

  for (let x of arr) {
    let cur = map.get(x);
    if (cur) {
      map.set(x, cur+1);
    } else {
      map.set(x, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

// 参考
// https://leetcode-cn.com/problems/first-unique-character-in-a-string/solution/zi-fu-chuan-zhong-de-di-yi-ge-wei-yi-zi-x9rok/