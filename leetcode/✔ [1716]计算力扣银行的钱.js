/* 计算力扣银行的钱(https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/)
- Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱
- 最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱
- 在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。
- 给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱
*/

/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  let [x, y, res] = [(n / 7) >> 0, n % 7, 0]
  for (let i = 1; i <= x; i++) {
    res += ((2 * i + 6) * 7) / 2
  }
  res += ((2 * x + 1 + y) * y) / 2
  return res
}

console.log(totalMoney(4)) // 10
console.log(totalMoney(10)) // 37
console.log(totalMoney(20)) // 96
