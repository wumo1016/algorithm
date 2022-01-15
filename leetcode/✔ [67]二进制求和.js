/* 二进制求和(https://leetcode-cn.com/problems/add-binary/description/)
- 给你两个二进制字符串，返回它们的和（用二进制表示）
- 输入为 非空 字符串且只包含数字 1 和 0
- 1 <= a.length, b.length <= 10^4
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const [len1, len2] = [a.length, b.length]
  let [i, j, cur, res] = [len1 - 1, len2 - 1, 0, '']
  while (i >= 0 && j >= 0) {
    const t = Number(a[i]) + Number(b[j]) + cur
    if (t > 1) {
      res = (t === 2 ? 0 : 1) + res
      cur = 1
    } else {
      res = t + res
      cur = 0
    }
    i--
    j--
  }
  while (i >= 0) {
    const t = Number(a[i]) + cur
    if (t > 1) {
      res = (t === 2 ? 0 : 1) + res
      cur = 1
    } else {
      res = t + res
      cur = 0
    }
    i--
  }
  while (j >= 0) {
    const t = Number(b[j]) + cur
    if (t > 1) {
      res = (t === 2 ? 0 : 1) + res
      cur = 1
    } else {
      res = t + res
      cur = 0
    }
    j--
  }
  return (cur ? '1' : '') + res
}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
console.log(addBinary('1111', '1111')) // 11110

// 简化版
function addBinary(a, b) {
  let [i, j, cur, res] = [a.length - 1, b.length - 1, 0, '']
  while (i >= 0 || j >= 0) {
    const t =
      (i >= 0 ? Number(a[i--]) : 0) + (j >= 0 ? Number(b[j--]) : 0) + cur
    res = (t > 1 ? (t === 2 ? 0 : 1) : t) + res
    cur = t >> 1
  }
  return (cur ? '1' : '') + res
}

// 利用 BigInt 0b表格二进制数
function addBinary(a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
