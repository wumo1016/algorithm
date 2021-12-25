/* 两个数组的交集(https://leetcode-cn.com/problems/intersection-of-two-arrays/)
- 给定两个数组，编写一个函数来计算它们的交集
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection1(nums1, nums2) {
  return [...new Set(nums1)].filter(v => nums2.includes(v))
}

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) //[9,4]

function intersection(nums1, nums2) {
  const [len1, len2, map, res] = [nums1.length, nums2.length, new Map(), []]
  for (let i = 0; i < len1; i++) {
    map.set(nums1[i], true)
  }
  for (let i = 0; i < len2; i++) {
    const val = nums2[i]
    if (map.has(val)) {
      map.delete(val)
      res.push(val)
    }
  }
  return res
}
