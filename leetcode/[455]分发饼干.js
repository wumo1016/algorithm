/* 分发饼干(https://leetcode-cn.com/problems/assign-cookies/)
- 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
- 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；
- 并且每块饼干 j，都有一个尺寸 s[j] 。
- 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
- 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
- 1 <= g.length <= 3 * 104
- 0 <= s.length <= 3 * 104
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let [i, res] = [0, 0]
  for (const val of s) {
    if (val >= g[i]) {
      i++
      res++
    }
  }
  return res
}

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
console.log(findContentChildren([1, 2], [1, 2, 3])) // 2
console.log(findContentChildren([1, 2, 3], [3])) // 1
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])) // 2
