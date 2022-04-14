/* 千位分隔数(https://leetcode-cn.com/problems/thousand-separator/)
- 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回
- 0 <= n < 2^31
*/

/**
 * @param {number} n
 * @return {string}
 */
function thousandSeparator(n) {
  let [res, num] = ['', 0]
  n = String(n)
  for (let i = n.length - 1; i >= 0; i--, num++) {
    if (num === 3) [res, num] = ['.' + res, 0]
    res = n[i] + res
  }
  return res
}

console.log(thousandSeparator(987)) // "987"
console.log(thousandSeparator(1234)) // "1.234"
console.log(thousandSeparator(123456789)) // "123.456.789"
console.log(thousandSeparator(0)) // "0"

// 正则
function thousandSeparator(n) {
  // return String(n).replace(/\d{1,3}(?=(\d{3})+$)/g, match => `${match}.`)
  return String(n).replace(/(?!^)(?=(\d{3})+$)/g, '.')
}
