/* 等式方程的可满足性(https://leetcode-cn.com/problems/satisfiability-of-equality-equations/description/)
- 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。
- 在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
- 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。
*/

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
