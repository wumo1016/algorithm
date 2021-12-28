/* 数组序号转换(https://leetcode-cn.com/problems/rank-transform-of-an-array/)
- 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号
- 序号代表了一个元素有多大。序号编号的规则如下：
  序号从 1 开始编号。
  一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
  每个数字的序号都应该尽可能地小。
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  const [res, map] = [[...arr], new Map()]
  res.sort((a, b) => a - b)
  let index = 1
  res.forEach(v => {
    if (!map.has(v)) map.set(v, index++)
  })
  return arr.map(v => map.get(v))
}

console.log(arrayRankTransform([40, 10, 20, 30])) // [4,1,2,3]
console.log(arrayRankTransform([100, 100, 100])) // [1,1,1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])) // [5,3,4,2,8,6,7,1,3]
