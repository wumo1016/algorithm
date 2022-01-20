/* 等式方程的可满足性(https://leetcode-cn.com/problems/satisfiability-of-equality-equations/description/)
- 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。
- 在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
- 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。
*/

class QuickUnion {
  constructor() {
    this.father = {}
    this.init()
  }
  // 将每个节点的颜色初始化为自身颜色
  init() {
    for (var i = 0; i < 26; i++) {
      const key = String.fromCharCode(97 + i)
      this.father[key] = key
    }
  }
  // 查找
  find(i) {
    if (this.father[i] === i) return i
    return this.find(this.father[i])
  }
  // 是否是同一集合
  same(x, y) {
    return this.find(x) === this.find(y)
  }
  // 合并
  merge(x, y) {
    const m = this.find(x)
    const n = this.find(y)
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
      const list = Object.entries(obj).filter(
        ([key, value]) => value === obj[x] || value === obj[z]
      )
      const target = [
        ...new Set(list.reduce((res, cur) => res.concat(cur[1]), []))
      ]
      list.forEach(([key]) => {
        obj[key] = target
      })
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

// 优化版
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
// 并查集
function equationsPossible(equations) {
  const quickUoion = new QuickUnion(26)
  const notList = []
  equations.forEach(value => {
    ;/(.)(==|!=)(.)/.test(value)
    const [x, y, z] = [RegExp.$1, RegExp.$2, RegExp.$3]
    if (y === '==') {
      quickUoion.merge(x, z)
    } else {
      notList.push([x, z])
    }
  })
  const len = notList.length
  for (let i = 0; i < len; i++) {
    const [x, z] = notList[i]
    if (quickUoion.same(x, z)) return false
  }
  return true
}
