/* 最近的请求次数
- 写一个 RecentCounter 类来计算特定时间范围内最近的请求
- RecentCounter() 初始化计数器，请求数为 0 
- int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数
- 保证每次对 ping 调用所使用的 t 值都 严格递增
- 1 <= t <= 109
*/
var RecentCounter = function () {
  this.list = []
}

/**
 * @param {number} t
 * @return {number}
 */
// 暴力筛选符合要求的值
// RecentCounter.prototype.ping = function (t) {
//   this.list.push(t)
//   return this.list.filter(v => v <= t && v >= t - 3000).length
// }

// 利用队列的性质 先进先出
RecentCounter.prototype.ping = function (t) {
  this.list.push(t)
  while (this.list[0] < t - 3000) {
    this.list.shift()
  }
  return this.list.length
}

const recentCounter = new RecentCounter()
console.log(recentCounter.ping(1))
console.log(recentCounter.ping(100))
console.log(recentCounter.ping(3001))
console.log(recentCounter.ping(3002))
