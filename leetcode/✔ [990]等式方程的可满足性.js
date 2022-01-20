/* 等式方程的可满足性(https://leetcode-cn.com/problems/satisfiability-of-equality-equations/description/)
- 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。
- 在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
- 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。
*/

class UnionSet {
  constructor() {
    this.father = {}
    for (var i = 0; i < 26; i++) {
      const key = String.fromCharCode(97 + i)
      this.father[key] = key
    }
  }
  find(i) {
    return this.father[i] === i ? i : this.find(this.father[i])
  }
  isSame(x, y) {
    return this.find(x) === this.find(y)
  }
  merge(x, y) {
    const [m, n] = [this.find(x), this.find(y)]
    if (m === n) return
    this.father[m] = n
  }
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible(equations) {
  const [obj, notList] = [{}, []]
  equations.forEach(value => {
    ;/(.)(==|!=)(.)/.test(value)
    const [x, y, z] = [RegExp.$1, RegExp.$2, RegExp.$3]
    if (!obj[x]) obj[x] = [x]
    if (!obj[z]) obj[z] = [z]
    if (y === '==') {
      const [set, keys] = [new Set(), []]
      Object.entries(obj).map(([key, value]) => {
        if (value === obj[x] || value === obj[z]) {
          keys.push(key)
          value.forEach(v => set.add(v))
        }
      })
      const target = [...set]
      keys.forEach(key => (obj[key] = target))
    } else {
      notList.push([x, z])
    }
  })
  const len = notList.length
  for (let i = 0; i < len; i++) {
    const [x, z] = notList[i]
    if (obj[x] === obj[z]) return false
  }
  return true
}

console.log(equationsPossible(['a==b', 'b!=a'])) // false
console.log(equationsPossible(['b==a', 'a==b'])) // true
console.log(equationsPossible(['a==b', 'b==c', 'a==c'])) // true
console.log(equationsPossible(['a==b', 'b!=c', 'c==a'])) // false
console.log(equationsPossible(['c==c', 'b==d', 'x!=z'])) // true
console.log(equationsPossible(['c==c', 'f!=a', 'f==b', 'b==c'])) // true
console.log(equationsPossible(['f==b', 'c==b', 'c==b', 'e!=f'])) // true

// 并查集
function equationsPossible(equations) {
  const us = new UnionSet(26)
  const notList = []
  equations.forEach(value => {
    const [x, z] = [value[0], value[3]]
    value[1] === '=' ? us.merge(x, z) : notList.push([x, z])
  })
  const len = notList.length
  for (let i = 0; i < len; i++) {
    const [x, z] = notList[i]
    if (us.isSame(x, z)) return false
  }
  return true
}
