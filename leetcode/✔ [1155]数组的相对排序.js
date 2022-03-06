/* 数组的相对排序(https://leetcode-cn.com/problems/relative-sort-array/)
- 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
- 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同
- 未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾
- 0 <= arr1[i], arr2[i] <= 1000
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const [map, other, res] = [new Map(), [], []]
  for (const val of arr2) {
    map.set(val, 0)
  }
  for (const val of arr1) {
    map.has(val) ? map.set(val, map.get(val) + 1) : other.push(val)
  }
  for (const val of arr2) {
    res.push(...Array(map.get(val)).fill(val))
  }
  res.push(...other.sort((a, b) => a - b))
  return res
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
) // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])) // [22,28,8,6,17,44]

// 利用sort函数
function relativeSortArray(arr1, arr2) {
  return arr1.sort(
    (a, b, i = arr2.indexOf(a), j = arr2.indexOf(b)) =>
      (i === -1 ? 1000 + a : i) - (j === -1 ? 1000 + b : j)
  )
}
