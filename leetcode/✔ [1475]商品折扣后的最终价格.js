/* 商品折扣后的最终价格(https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/)
- 
*/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const val = prices[i]
      if (prices[j] <= val) {
        prices[i] = val - prices[j]
        break
      }
    }
  }
  return prices
}

console.log(finalPrices([8, 4, 6, 2, 3])) // [4,2,4,2,3]
console.log(finalPrices([1, 2, 3, 4, 5])) // [1,2,3,4,5]
console.log(finalPrices([10, 1, 1, 6])) // [9,0,1,6]

// 利用栈
function finalPrices(prices) {
  const [stack, res] = [[], []]
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    res[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i]
    stack.push(prices[i])
  }
  return res
}
