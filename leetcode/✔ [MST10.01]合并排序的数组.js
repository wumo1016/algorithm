/* 合并排序的数组(https://leetcode.cn/problems/sorted-merge-lcci/)
- 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B
- 编写一个方法，将 B 合并入 A 并排序
- 初始化 A 和 B 的元素数量分别为 m 和 n
*/

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
function merge(A, m, B, n) {
  A.splice(m, n, ...B)
  return A.sort((a, b) => a - b)
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]

// 双指针
function merge(A, m, B, n) {
  const res = Array(m + n).fill(0)
  let [mi, ni] = [0, 0]
  while (mi < m || ni < n) {
    let val
    if (mi === m) {
      val = B[ni++]
    } else if (ni === n) {
      val = A[mi++]
    } else if (A[mi] < B[ni]) {
      val = A[mi++]
    } else {
      val = B[ni++]
    }
    res[mi + ni - 1] = val
  }
  for (let i = 0, len = m + n; i < len; i++) {
    A[i] = res[i]
  }
  return A
}

// 逆向双指针
function merge(A, m, B, n) {
  let [mi, ni] = [m - 1, n - 1]
  while (mi >= 0 || ni >= 0) {
    let val
    if (mi < 0) {
      val = B[ni--]
    } else if (ni < 0) {
      val = A[mi--]
    } else if (A[mi] > B[ni]) {
      val = A[mi--]
    } else {
      val = B[ni--]
    }
    A[mi + ni + 2] = val
  }
  return A
}
