/* 字符串相加(https://leetcode-cn.com/problems/add-strings/)
- 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回
- 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
- 1 <= num1.length, num2.length <= 104
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  let [i, j, tag, res] = [num1.length - 1, num2.length - 1, 0, '']
  while (i > -1 || j > -1 || tag) {
    const [val1, val2] = [num1[i--] || 0, num2[j--] || 0]
    const cur = +val1 + +val2 + tag
    tag = cur > 9 ? 1 : 0
    res = (cur % 10) + res
  }
  return res
}

console.log(addStrings('11', '123')) // 134
console.log(addStrings('1456', '77')) // 1533
console.log(addStrings('0', '0')) // 0

function addStrings(num1, num2) {
  let [i, j, tag, res] = [num1.length - 1, num2.length - 1, 0, '']
  while ((i > -1 && j > -1) || tag) {
    const [val1, val2] = [num1[i--] || 0, num2[j--] || 0]
    const cur = +val1 + +val2 + tag
    tag = cur > 9 ? 1 : 0
    res = (cur % 10) + res
  }
  if (i > -1) res = num1.slice(0, i + 1) + res
  if (j > -1) res = num2.slice(0, j + 1) + res
  return res
}
