/*
 * @Description: 并查集
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2022-01-20 09:38:27
 */

class QuickUnion {
  constructor(n = 100) {
    this.n = n
    this.father = Array(n)
    this.init()
  }
  // 将每个节点的颜色初始化为自身颜色
  init() {
    for (let i = 0; i < this.n; i++) {
      this.father[i] = i
    }
  }
  // 查找
  find(i) {
    if (this.father[i] === i) return i
    return this.find(this.father[i])
  }
  // 是否是同一集合
  same(x, y) {
    return this.find(x) === this.find(y)
  }
  // 合并
  merge(x, y) {
    const m = this.find(x)
    const n = this.find(y)
    if (m === n) return
    this.father[m] = n
  }
}
