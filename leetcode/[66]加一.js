/* 加一(https://leetcode-cn.com/problems/plus-one/description/)
- 给给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
- 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
- 你可以假设除了整数 0 之外，这个整数不会以零开头。
- 1 <= digits.length <= 100
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  const len = digits.length
  let cur = 1
  for (let i = len - 1; i >= 0; i--) {
    const res = digits[i] + 1
    if (res === 10) {
      digits[i] = 0
    } else {c
      digits[i] = res
      cur = 0
      break
    }
  }
  if (cur === 1) digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])) // [4,3,2,2]
