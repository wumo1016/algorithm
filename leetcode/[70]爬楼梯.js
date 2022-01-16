/* 爬楼梯(https://leetcode-cn.com/problems/climbing-stairs/)
- 假设你正在爬楼梯。需要 n 阶你才能到达楼顶
- 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
- 给定 n 是一个正整数
*/

// 爬n阶的时候 需要的结果n-1阶和n-2阶的和

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n < 3) return n
  const res = [1, 2]
  for (let i = 3; i <= n; i++) {
    res.push(res[i - 2] + res[i - 3])
  }
  return res[n - 1]
}

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
