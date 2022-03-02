/* 合并两个有序数组(https://leetcode-cn.com/problems/merge-sorted-array/)
- 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
- 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
- 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列
- 最终，合并后数组不应由函数返回，而是存储在数组 nums1 中
- 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n
- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- 你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let [res, total, r] = [[], nums1.length, 0]
  for (let i = 0; i < total; i++) {
    const [val1, val2] = [nums1[i], nums2[r]]
    if (res.length) {
      if (r < n) {
        if (val2 < res[0]) {
          nums1[i] = val2
          r++
        } else {
          nums1[i] = res.shift()
        }
      } else {
        nums1[i] = res.shift()
      }
      if (i < m) res.push(val1)
    } else {
      if (i < m && r < n) {
        if (val2 < val1) {
          nums1[i] = val2
          r++
          res.push(val1)
        }
      } else if (r < n) {
        nums1[i] = val2
        r++
      }
    }
  }
  return nums1
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)) // [1]
// console.log(merge([0], 0, [1], 1)) // [1]
// console.log(merge([1, 3, 4, 7, 0, 0, 0], 4, [2, 5, 6], 3)) // [1,2,2,3,5,6]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)) // [-1,0,0,1,2,2,3,3,3]

// 优化版
function merge(nums1, m, nums2, n) {
  let [res, total, r] = [[], nums1.length, 0]
  for (let i = 0; i < total; i++) {
    const [val1, val2] = [nums1[i], nums2[r]]
    if (res.length) {
      if (r < n && val2 < res[0]) {
        nums1[i] = val2
        r++
      } else {
        nums1[i] = res.shift()
      }
      if (i < m) res.push(val1)
    } else {
      if (i < m && r < n) {
        if (val2 < val1) {
          nums1[i] = val2
          r++
          res.push(val1)
        }
      } else if (r < n) {
        nums1[i] = val2
        r++
      }
    }
  }
  return nums1
}

// 双指针
function merge(nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0
  const sorted = new Array(m + n).fill(0)
  var cur
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }
    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i]
  }
  return nums1
}
