/* 重新排列数组(https://leetcode-cn.com/problems/shuffle-the-array/)
- 给你一个数组 nums ，数组中有 2n 个元素
- 按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列
- 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  const nums1 = nums.slice(n)
  return nums.slice(0, n).reduce((res, cur, index) => res.concat(cur, nums1[index]), [])
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)) // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)) // [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)) // [1,2,1,2]
