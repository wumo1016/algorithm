// 一个函数 用大O表示 比如 O(1) O(n) O(logN)
// 定性该算法的运行时间

/** O(1)
 * 里面的代码只会执行一次
 */
;(function () {
  let i = 1
  i += 1
})()

/** O(n)
 * log代码执行了n次
 */
;(function () {
  let n = 10
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
})()

/** O(n^2)
 * log代码执行了n^2次
 */
;(function () {
  let n = 10
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
})()

/** O(logN)
 * 2的多少次方等与n
 */
;(function () {
  let i = 1,
    n = 100
  while (i < n) {
    console.log(i)
    i = i * 2
  }
})()
