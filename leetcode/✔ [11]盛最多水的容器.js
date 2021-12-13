/* 盛最多水的容器(https://leetcode-cn.com/problems/container-with-most-water/)
- 给定一个非负整数数组 找出其中两个数 使他们索引的差与他们中的最小值的乘积最大
*/

/**
 * @param {number[]} height
 * @return {number}
 */
//
/* 双层for
- 先从头开始遍历元素
- 然后将当前元素与后面的每一个元素对比 求最大值
- 可以从后开始对比 因为一旦当前值作为最小值时 那再往前的值一定比这个小
*/
function maxArea1(height) {
  let [len, max] = [height.length, 0]
  for (let i = 0; i < len; i++) {
    const val1 = height[i]
    for (let j = len - 1; j >= i; j--) {
      const min = Math.min(val1, height[j])
      max = Math.max(max, (j - i) * min)
      if (min === val1) break
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
console.log(maxArea([4, 3, 2, 1, 4])) // 16
console.log(maxArea([1, 2, 1])) // 2

/* 双指针
- 假设 左边小于右边的值 那么无论右边的值如何向左移动 都无法超过开始的值 
- 所以只有将小的向里面移动 才有可能获取更大的值
*/
function maxArea(height) {
  let [left, right, max] = [0, height.length - 1, 0]
  while (left < right) {
    const [x, y] = [height[left], height[right]]
    const min = Math.min(x, y)
    max = Math.max(max, min * (right - left))
    min === x ? left++ : right--
  }
  return max
}
