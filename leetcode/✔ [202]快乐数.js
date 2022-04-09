/* 快乐数(https://leetcode-cn.com/problems/happy-number/)
- 「快乐数」 定义为：
  - 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
  - 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1
  - 如果这个过程 结果为 1，那么这个数就是快乐数
- 如果 n 是 快乐数 就返回 true ；不是，则返回 false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const set = new Set()
  while (!set.has(n)) {
    set.add(n)
    n = String(n)
      .split('')
      .reduce((total, cur) => total + Math.pow(Number(cur), 2), 0)
    if (n === 1) return true
  }
  return false
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
console.log(isHappy(7)) // false
