/*
 * @Description: 并查集
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2022-01-19 19:39:26
 */

class QuickFind {
  constructor(n = 100) {
    this.n = n
    this.color = Array(n)
    this.init()
  }
  // 将每个节点的颜色初始化为自身颜色
  init() {
    for (let i = 0; i < this.n; i++) {
      this.color[i] = i
    }
  }
  // 查找
  find(i) {
    return this.color[i]
  }
  // 是否是同一集合
  same(x, y) {
    return this.find[x] === this.find[y]
  }
  // 合并
  merge(x, y) {
    for (let i = 0; i < this.n; i++) {
      if (this.color[i] === this.color[x]) {
        this.color[i] = this.color[y]
      }
    }
  }
}
