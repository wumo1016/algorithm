/* 字符串解码(https://leetcode-cn.com/problems/decode-string)
- 给定一个经过编码的字符串，返回它解码后的字符串。
- 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
- 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
- 你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k
- 3[a]2[bc] => aaabcbc
- 3[a2[c]] => accaccacc
*/

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  const genStr = ({ val, number }) => Array(number).fill(val).join('')
  let [res, stack, len, has, isNumber, loading, total] = [
    '',
    [],
    s.length,
    false,
    false,
    false,
    ''
  ]
  for (let i = 0; i < len; i++) {
    const val = s[i]
    if (!isNaN(val)) {
      if (isNumber) {
        stack[stack.length - 1].number = Number(
          stack[stack.length - 1].number + val
        )
      } else {
        stack.push({
          number: Number(val),
          val: ''
        })
      }
      isNumber = true
    } else {
      isNumber = false
      if (val === ']') {
        const last = stack.pop()
        if (has) {
          last.val += res
        } else {
          total += res
        }
        res = genStr(last)
        has = stack.length > 0
        loading = false
      } else if (val === '[') {
        loading = true
      } else {
        if (stack.length > 0) {
          stack[stack.length - 1].val += val
        } else {
          res += val
        }
      }
    }
  }
  total += res
  return total
}

// function decodeString(s) {
//   const genStr = ({ val, number }) => Array(number).fill(val).join('')
// }

// console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
// console.log(decodeString('abc3[cd]xyz'))
console.log(decodeString('10[leetcode]'))
console.log(decodeString('3[z]2[d2[a3[c]]]er'))
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'))
console.log('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')
