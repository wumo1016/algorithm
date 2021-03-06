/* 推多米诺(https://leetcode-cn.com/problems/push-dominoes/)
- 给定表示初始状态的字符串 "S"
- 如果第 i 张多米诺骨牌被推向左边，则 S[i] = 'L'
- 如果第 i 张多米诺骨牌被推向右边，则 S[i] = 'R
- 如果第 i 张多米诺骨牌没有被推动，则 S[i] = '.'
- 如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡， 该骨牌仍然保持不变
*/

/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(str) {
  str = str
    .replace(/(^\.+L)/, (_, p1) => 'L'.repeat(p1.length)) // 替换 .L
    .replace(/(R\.+$)/, (_, p1) => 'R'.repeat(p1.length)) // 替换 R.
    .replace(/(R\.{2,}L)/, (_, p1) => {
      // 替换 R.L
      const len = p1.length,
        q = Math.floor(len / 2)
      return `${'R'.repeat(q)}${len % 2 === 1 ? '.' : ''}${'L'.repeat(q)}`
    })
  // 替换 L.L R.R
  const rrReg = /(L\.+L)|(R\.+R)/g
  while (rrReg.test(str)) {
    str = str.replace(rrReg, (_, p1, p2) =>
      `${p1 ? 'L' : 'R'}`.repeat(p1 ? p1.length : p2.length)
    )
  }
  return str
}

// console.log(pushDominoes('.L.R...LR..L..')) // LL.RR.LLRRLL..
// console.log(pushDominoes('RR.L')) // RR.L
// console.log(pushDominoes('.L.R.')) // LL.RR
// console.log(pushDominoes('R.R.L')) // RRR.L
console.log(
  pushDominoes(
    '...RL....R.L.L........RR......L....R.L.....R.L..RL....R....R......R.......................LR.R..L.R.'
  )
)
// ...RL....R.L.L........RR......L....R.L.....R.L..RL....R....R......R.......................LR.R..L.R.
// ...RL....R.LLL........RRRRRLLLL....R.L.....R.L..RL....RRRRRRRRRRRRRRRRRRRRRRRR.LLLLLLLLLLLLRRRRLL.RR
// ...RL....R.LLL........RRRRRLLLL....R.L.....R.L..RL....RRRRRRRRRRRRRRRRRRRRRRRR.LLLLLLLLLLLLRRRRLL.RR
