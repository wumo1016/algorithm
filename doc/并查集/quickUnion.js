/*
 * @Description: 并查集
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2022-01-20 13:42:36
 */

class QuickUnion {
  constructor(n = 100) {
    this.n = n
    this.size = n // 当前的集合数
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
    return this.father[i] === i ? i : this.find(this.father[i])
  }
  // 是否是同一集合
  same(x, y) {
    return this.find(x) === this.find(y)
  }
  // 合并
  merge(x, y) {
    const [m, n] = [this.find(x), this.find(y)]
    if (m === n) return false
    this.father[m] = n
    this.size--
    return true
  }
}

class UnionSet {
  constructor(n = 100) {
    this.size = n
    this.father = Array(n)
      .fill()
      .map((_, i) => i)
  }
  find(i) {
    return this.father[i] === i ? i : this.find(this.father[i])
  }
  isSame(x, y) {
    return this.find(x) === this.find(y)
  }
  merge(x, y) {
    const [m, n] = [this.find(x), this.find(y)]
    if (m === n) return false
    this.father[m] = n
    this.size--
    return true
  }
}
