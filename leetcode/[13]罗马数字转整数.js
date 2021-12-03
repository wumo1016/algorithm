/* 罗马数字转整数(https://leetcode-cn.com/problems/roman-to-integer/description/)
- 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
- 通常情况下，罗马数字中小的数字在大的数字的右边。
- 但也存在特例，例如 4 不写做 IIII，而是 IV。
- 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
- 同样地，数字 9 表示为 IX。
- 这个特殊的规则只适用于以下六种情况：
  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
*/

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const base = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const spec = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let total = 0
  Reflect.ownKeys(spec).map(key => {
    s = s.replace(new RegExp(`(${key})`), (m, p1) => {
      if (p1) total += spec[m]
      return ''
    })
  })
  const len = s.length
  for (let i = 0; i < len; i++) {
    total += base[s[i]] || 0
  }
  return total
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt('DCXXI')) // 661
console.log(romanToInt('MMMXLV')) // 3045
