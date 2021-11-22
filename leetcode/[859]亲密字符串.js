/* 亲密字符串
- 给给你两个字符串 s 和 goal
- 只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true 否则返回 false 
- 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s 和 s[j] 处的字符
- s 和 goal 由小写英文字母组成
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false
  let diff = [],
    set = new Set(),
    isValid = false
  for (let i = 0; i < s.length; i++) {
    let val1 = s[i]
    if (val1 !== goal[i]) {
      diff.push(i)
    }
    if (set.has(val1)) {
      isValid = true
    } else {
      set.add(val1)
    }
    if (diff.length > 2) return false
  }
  if (diff.length === 2) {
    let i = diff[0]
    let j = diff[1]
    if (s[i] === goal[j] && s[j] === goal[i]) {
      return true
    }
  }
  // 完全相等 情况下只要有一个字母出现大于等于两次就可以
  if (diff.length === 0 && isValid) return true
  return false
}

console.log(buddyStrings('ab', 'ba')) // true
console.log(buddyStrings('ab', 'ab')) // false
console.log(buddyStrings('aa', 'aa')) // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')) // true

// 官方优化版
function buddyStrings1() {
  if (s.length != goal.length) {
    return false
  }

  if (s === goal) {
    const count = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      count[s[i].charCodeAt() - 'a'.charCodeAt()]++
      if (count[s[i].charCodeAt() - 'a'.charCodeAt()] > 1) {
        return true
      }
    }
    return false
  } else {
    let first = -1,
      second = -1
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) first = i
        else if (second === -1) second = i
        else return false
      }
    }

    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    )
  }
}
