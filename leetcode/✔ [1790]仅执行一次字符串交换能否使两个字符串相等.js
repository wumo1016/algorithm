/* 仅执行一次字符串交换能否使两个字符串相等(https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/)
- 
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
  if (s1 === s2) return true;
  const diff = [];
  for (let i = 0, len = s1.length; i < len; i++) {
    if (s1[i] !== s2[i]) diff.push(i);
    if (diff.length > 2) return false;
  }
  if (
    diff.length === 2 &&
    s1[diff[0]] === s2[diff[1]] &&
    s1[diff[1]] === s2[diff[0]]
  ) {
    return true;
  }
  return false;
}

console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("abcd", "dcba")); // false
