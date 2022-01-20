// 颜色即代表了集合的名字
// quick-find算法
class UnionSet1 {
  constructor(n = 100) {
    this.n = n
    this.color = new Array(n) // 集合的颜色
    this.init()
  }

  // 将个节点的颜色定义为自身的颜色
  init() {
    for (let i = 0; i < this.n; i++) {
      this.color[i] = i // 集合的颜色初始化
    }
  }

  // 查找x属于哪个集合
  find(x) {
    return this.color[x]
  }

  // 查询a，b是否属于同一个集合
  query(a, b) {
    return this.find(a) === this.find(b)
  }

  // 让 a 集合的节点颜色 涂 成 b集合的颜色
  merge(a, b) {
    const colorA = this.color[a]
    for (let i = 0; i < this.n; i++) {
      if (this.color[i] === colorA) {
        // 并不是只有color[a] 的颜色是color[a],
        // 可能有好多颜色都是color[a]
        this.color[i] = this.color[b]
      }
    }
  }
}

// queck-union
class UnionSet2 {
  constructor(n = 100) {
    this.n = n
    this.father = new Array(n)
    this.init()
  }

  // 将个节点的父节点定义为自身
  init() {
    for (let i = 0; i < this.n; i++) {
      this.father[i] = i // 集合的父节点初始化
    }
  }

  // 查找x属于哪个集合, x的根节点是谁
  find(x) {
    // 如果x的父节点是他自己， 那么x就是根节点
    if (this.father[x] === x) return x
    // 否则，我们就继续向上查找
    return this.find(this.father[x])
  }

  // 查询a，b是否属于同一个集合
  query(a, b) {
    return this.find(a) === this.find(b)
  }

  //
  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)
    if (fa === fb) return
    this.father[fa] = fb
  }
}

// weighted-queck-union // 优化find方法
class UnionSet3 {
  constructor(n = 100) {
    this.n = n
    this.father = new Array(n)
    this.size = new Array(n) // 存放当前集合的元素数量
    this.init()
  }

  init() {
    for (let i = 0; i < this.n; i++) {
      this.father[i] = i // 集合的父节点初始化
      this.size[i] = 1
    }
  }

  find(x) {
    // 如果x的父节点是他自己， 那么x就是根节点
    if (this.father[x] === x) return x
    // 否则，我们就继续向上查找
    return this.find(this.father[x])
  }

  // 查询a，b是否属于同一个集合
  query(a, b) {
    return this.find(a) === this.find(b)
  }

  //
  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)
    if (fa === fb) return
    if (this.size[fa] < this.size[fb]) {
      this.father[fa] = fb // 将a合并到b中
      this.size[fb] += this.size[fa] // b集合的元素数量要加上a集合的数量
    } else {
      this.father[fb] = fa // 将a合并到b中
      this.size[fa] += this.size[fb]
    }
  }
}

// /**带路径压缩的**/ weighted-queck-union
class UnionSet4 {
  constructor(n = 100) {
    this.n = n
    this.father = new Array(n)
    this.size = new Array(n) // 存放当前集合的元素数量
    this.init()
  }

  init() {
    for (let i = 0; i < this.n; i++) {
      this.father[i] = i // 集合的父节点初始化
      this.size[i] = 1
    }
  }

  find(x) {
    // 如果x的父节点是他自己， 那么x就是根节点
    if (this.father[x] === x) return x
    // 否则，我们就继续向上查找
    const root = this.find(this.father[x])
    ///***/// 将 x 直接挂到根节点上
    this.father[x] = root
    return root
  }

  // 查询a，b是否属于同一个集合
  query(a, b) {
    return this.find(a) === this.find(b)
  }

  //
  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)
    if (fa === fb) return
    if (this.size[fa] < this.size[fb]) {
      this.father[fa] = fb // 将a合并到b中
      this.size[fb] += this.size[fa] // b集合的元素数量要加上a集合的数量
    } else {
      this.father[fb] = fa // 将a合并到b中
      this.size[fa] += this.size[fb]
    }
  }
}

/**带路径压缩的**/
class UnionSet {
  constructor(n = 100) {
    this.n = n
    this.father = new Array(n)
    this.init()
  }
  init() {
    for (let i = 0; i < this.n; i++) this.father[i] = i
  }

  find(x) {
    return (this.father[x] =
      this.father[x] === x ? x : this.find(this.father[x]))
  }

  merge(a, b) {
    this.father[this.find(a)] = this.find(b)
  }
  query(a, b) {
    return this.find(a) === this.find(b)
  }
}

function test() {
  const unionSet = new UnionSet(100)
  unionSet.merge(3, 1)
  unionSet.merge(1, 4)
  console.log(`1属于集合 ${unionSet.find(1)}`)
  console.log(`4属于集合 ${unionSet.find(4)}`)
  console.log(`6属于集合 ${unionSet.find(6)}`)
  console.log(`3、4属于一个集合 ${unionSet.query(3, 4)}`)
  console.log(`3、6属于一个集合 ${unionSet.query(3, 6)}`)
}
test()
