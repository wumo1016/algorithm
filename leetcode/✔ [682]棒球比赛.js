/* 棒球比赛(https://leetcode-cn.com/problems/baseball-game/)
- 你会得到一个记录操作的字符串列表 ops，其中ops[i]是你需要记录的第i项操作
- ops 遵循下述规则：
  1.整数 x - 表示本回合新获得分数 x
  2."+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
  3."D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
  4."C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints1(ops) {
  let [i, total] = [0, 0]
  while (i < ops.length) {
    let val = ops[i]
    if (val === '+') {
      val = Number(ops[i - 1]) + Number(ops[i - 2])
      ops.splice(i, 1, val)
    } else if (val === 'D') {
      val = Number(ops[i - 1]) * 2
      ops.splice(i, 1, val)
    } else if (val === 'C') {
      val = -Number(ops[i - 1])
      ops.splice(i - 1, 2)
      i -= 2
    }
    total += Number(val)
    i++
  }
  return total
}

console.log(calPoints(['5', '2', 'C', 'D', '+'])) // 30

// 用栈解决
function calPoints(ops) {
  const [stack, len] = [[], ops.length]
  for (let i = 0; i < len; i++) {
    let val = ops[i],
      l = stack.length
    if (val === '+') {
      val = stack[l - 1] + stack[l - 2]
    } else if (val === 'D') {
      val = stack[l - 1] * 2
    } else if (val === 'C') {
      stack.pop()
    }
    if (stack.length === l) stack.push(Number(val))
  }
  return stack.reduce((a, b) => a + b)
}
