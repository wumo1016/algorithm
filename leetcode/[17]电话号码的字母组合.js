/* 电话号码的字母组合(https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
- 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
- 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
- 0 <= digits.length <= 4
- digits[i] 是范围 ['2', '9'] 的一个数字。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const [maps, len, res] = [
    {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    },
    digits.length,
    []
  ]
  const loop = (i, pre) => {
    if (!digits[i]) return res
    maps[digits[i]].forEach(v => {
      if (pre.length === len - 1) {
        res.push(pre + v)
      } else {
        loop(i + 1, pre + v)
      }
    })
    return res
  }
  return loop(0, '')
}

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')) // []
console.log(letterCombinations('2')) // ["a","b","c"]

function letterCombinations(digits) {
  if (digits.length == 0) return []
  const [map, len, queue] = [
    {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
    },
    digits.length,
    ['']
  ]
  for (let i = 0; i < len; i++) {
    const size = queue.length
    for (let j = 0; j < size; j++) {
      const [pre, cur] = [queue.shift(), map[digits[i]]]
      for (const val of cur) {
        queue.push(pre + val)
      }
    }
  }
  return queue
}

/* const obj = {}
let j = 2
for (let i = 2; i < 28; i++) {
  if (obj[j]) {
    if (j === 7 || j === 9) {
      if (obj[j].length === 4) j++
    } else if (obj[j].length === 3) {
      j++
    }
  }
  if (!obj[j]) obj[j] = []
  obj[j].push(String.fromCharCode(i + 95))
}
console.log(obj)
 */
