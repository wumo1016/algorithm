/* 汉明距离(https://leetcode-cn.com/problems/hamming-distance/)
- 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目
- 给你两个整数 x 和 y，计算并返回它们之间的汉明距离
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 异或
function hammingDistance(x, y) {
  const num1 = (x & y).toString(2).replaceAll('0', '').length // 都是1的数量
  const num2 = (x | y).toString(2).replaceAll('0', '').length // 都是1 + 不同位的数量
  return num2 - num1
}

console.log(hammingDistance(1, 4)) // 2
console.log(hammingDistance(3, 1)) // 1
console.log(hammingDistance(93, 73)) // 2

function hammingDistance(x, y) {
  return (
    (x | y).toString(2).replaceAll('0', '').length -
    (x & y).toString(2).replaceAll('0', '').length
  )
}

// 异或
function hammingDistance(x, y) {
  return (x ^ y).toString(2).replaceAll('0', '').length
}

// 异或 + 位移
function hammingDistance(x, y) {
  let [res, num] = [x ^ y, 0]
  while (res > 0) {
    num += res & 1
    res >>= 1
  }
  return num
}

// Brian Kernighan 算法
function hammingDistance(x, y) {
  let [res, num] = [x ^ y, 0]
  while (res > 0) {
    res &= res - 1
    num++
  }
  return num
}
