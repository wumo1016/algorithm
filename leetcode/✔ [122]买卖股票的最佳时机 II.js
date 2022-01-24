/* 买卖股票的最佳时机 II(https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
- 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
- 你设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）
- 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
- 1 <= prices.length <= 3 * 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let [len, res] = [prices.length, 0]
  for (let i = 1; i < len; i++) {
    const [prev, cur] = [prices[i - 1], prices[i]]
    if (cur > prev) res += cur - prev
  }
  return res
}

console.log(maxProfit([1, 2, 3, 4, 5, 3, 5])) // 6
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
