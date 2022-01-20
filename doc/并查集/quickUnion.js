/*
 * @Description: 并查集
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2022-01-20 21:36:53
 */

// 普通版
class UnionSet1 {
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
// 优化版 - 按秩合并(将节点数少的合并到节点数多的上面去)
class UnionSet2 {
  constructor(n = 100) {
    this.father = Array(n)
    this.size = Array(n) // 储存当前集合的元素数量
    for (let i = 0; i < n; i++) {
      this.father[i] = i
      this.size[i] = 1
    }
    console.log(this.father)
    console.log(this.size)
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
    if (this.size[m] < this.size[n]) {
      this.father[m] = n
      this.size[n] += this.size[m]
    } else {
      this.father[n] = m
      this.size[m] += this.size[n]
    }
    return true
  } 
}

new UnionSet2()
