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
  let [num, res, numStack, strStack, len] = [0, '', [], [], s.length]
  for (let i = 0; i < len; i++) {
    const val = s[i]
    if (!isNaN(val)) {
      num = num * 10 + Number(val)
    } else if (val === '[') {
      strStack.push(res)
      res = ''
      numStack.push(num)
      num = 0
    } else if (val === ']') {
      res = strStack.pop() + res.repeat(numStack.pop())
    } else {
      res += val
    }
  }
  return res
}

// console.log(decodeString1('a2[bc]2[de]f'))
// console.log(decodeString('3[a2[c]]'))
// console.log(decodeString('abc3[cd]xyz'))
// console.log(decodeString('10[leetcode]'))
// console.log(decodeString('3[z]2[d2[a3[c]]]er'))
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'))
console.log('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')

function decodeString1(s) {
  let [stack, len] = [[], s.length]
  for (let i = 0; i < len; i++) {
    const val = s[i]
    if (val !== ']') {
      stack.push(val)
      continue
    }
    // 拼接[]中的字符串
    let str = ''
    let last
    while ((last = stack.pop()) !== '[') {
      str = last + str
    }
    // 拼接数字
    let num = 0,
      index = 0
    while (!isNaN(stack[stack.length - 1])) {
      num = Number(stack.pop()) * Math.pow(10, index++) + num
    }
    // 将从需要重复的数据 替换成真实的数据
    str = str.repeat(num)
    stack.push(str)
  }
  return stack.join('')
}
