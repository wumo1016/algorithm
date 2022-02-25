/* 两个数组的交集 II(https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)
- 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
- 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
- 可以不考虑输出结果的顺序
- 1 <= nums1.length, nums2.length <= 1000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const [map, res] = [new Map(), new Map()]
  for (const val of nums1) {
    map.set(val, map.has(val) ? [...map.get(val), val] : [val])
  }
  for (const val of nums2) {
    if (map.has(val)) {
      res.set(val, res.has(val) ? [...res.get(val), val] : [val])
    }
  }
  res.forEach((value, key) => {
    if (map.get(key).length < value.length) res.set(key, map.get(key))
  })
  return [...res.values()].flat()
}

// console.log(intersect([1, 2, 2, 1], [2, 2])) // [2,2]
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4,9]

// 优化版 哈希表
function intersect(nums1, nums2) {
  const [map, res] = [{}, []]
  for (const val of nums1) {
    map[val] ? map[val]++ : (map[val] = 1)
  }
  for (const val of nums2) {
    if (map[val]) {
      map[val]--
      res.push(val)
    }
  }
  return res
}

// 双指针
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let [len1, len2, i1, i2, res] = [nums1.length, nums2.length, 0, 0, []]
  while (i1 < len1 && i2 < len2) {
    const [val1, val2] = [nums1[i1], nums2[i2]]
    if (val1 === val2) {
      res.push(val1)
      i1++
      i2++
    } else if (val1 < val2) {
      i1++
    } else {
      i2++
    }
  }
  return res
}
