/* 买卖股票的最佳时机(https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
- 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
- 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
- 设计一个算法来计算你所能获取的最大利润。
- 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let [min, res] = [Infinity, 0]
  for (const val of prices) {
    min = Math.min(min, val)
    if (val - min > res) res = val - min
  }
  return res
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
