/* 插入排序
- 从第二个元素开始遍历
- 保存当前元素
  - 遍历前面所有的元素(倒序) 如果比它大就往后移动一位
  - 如果最终能找到比它小的 就插入当前元素
 */

function sort(list) {
  const len = list.length
  for (let i = 1; i < len; i++) {
    const x = list[i]
    let j = i
    while (j > 0) {
      if (list[j - 1] > x) {
        list[j] = list[j - 1]
      } else {
        break
      }
      j--
    }
    if (j !== i) list[j] = x
  }
  return list
}

const data = [3, 4, 4, 5, 3, 1, 5, 6, 4, 3, 2, 5]
console.log(sort(data))

function sort(nums) {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    const val = nums[i]
    let j = i
    while (j > 0 && nums[j - 1] > val) {
      nums[j] = nums[j - 1]
      j--
    }
    if (j !== i) nums[j] = val
  }
  return nums
}
