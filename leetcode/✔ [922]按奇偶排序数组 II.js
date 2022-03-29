/* 按奇偶排序数组(https://leetcode-cn.com/problems/sort-array-by-parity-ii/)
- 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数
- 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数
- nums 中一半是偶数
- nums.length 是偶数
- 2 <= nums.length <= 2 * 104
- 0 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
  let [left, len] = [0, nums.length]
  while (left < len) {
    if ((left & 1) !== (nums[left] & 1)) {
      let right = left + 1
      while (right < len) {
        if ((left & 1) === (nums[right] & 1)) {
          ;[nums[left], nums[right]] = [nums[right], nums[left]]
          break
        }
        right++
      }
    }
    left++
  }
  return nums
}

console.log(sortArrayByParityII([4, 2, 5, 7])) // [4,5,2,7]
// console.log(sortArrayByParityII([3, 1, 4, 2])) // [2,1,4,3]
// console.log(
//   sortArrayByParityII([648, 831, 560, 986, 192, 424, 997, 829, 897, 843])
// ) // [648,831,560,997,192,897,986,829,424,843]

// 两次遍历
function sortArrayByParityII(nums) {
  const [len, res] = [nums.length, Array(nums.length)]
  let tag = 0
  for (let i = 0; i < len; i++) {
    if (!(nums[i] & 1)) {
      res[tag] = nums[i]
      tag += 2
    }
  }
  tag = 1
  for (let i = 0; i < len; i++) {
    if (nums[i] & 1) {
      res[tag] = nums[i]
      tag += 2
    }
  }
  return res
}

// 奇偶交换(偶数位上为奇数 和 奇数位上为偶数)
function sortArrayByParityII(nums) {
  let [n, j] = [nums.length, 1]
  for (let i = 0; i < n; i += 2) {
    if (nums[i] & 1) {
      while (nums[j] & 1) {
        j += 2
      }
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return nums
}

// 双指针 前面两个数字储存奇偶指针
function sortArrayByParityII(nums) {
  return nums.reduce((r, v) => ((r[(r[v & 1] += 2)] = v), r), [0, 1]).slice(2)
}

// 扁平化
function sortArrayByParityII(nums) {
  const t = [[], []]
  return (
    nums.forEach(v => t[v & 1].push(v)), t[0].map((v, i) => [v, t[1][i]]).flat()
  )
}
