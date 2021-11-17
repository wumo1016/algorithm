// 一个函数 用大O表示 比如 O(1) O(n) O(logN)
// 定性该算法在运行过程临时占用储存空间大小的度量

/** O(1)
 * 只有一个i变量
 */
;(function () {
  let i = 1
  i += 1
})()

/** O(n)
 * list中储存了n个值 所以占用了n个空间大小
 */
;(function () {
  const list = [],
    n = 10
  for (let i = 0; i < n; i++) {
    list.push(i)
  }
})()

/** O(n^2)
 * 矩阵 二位数组 储存了n^2的值  所以占用了n^2个空间大小
 */
;(function () {
  let list = [],
    n = 10
  for (let i = 0; i < n; i++) {
    list.push([])
    for (let j = 0; j < n; j++) {
      list[i].push(j)
    }
  }
})()
