/* 最小堆 */

class MinHeap {
  constructor() {
    this.heap = []
  }
  /**
   * @Author: wyb
   * @Descripttion: 插入
   * @param {*} value
   */

  insert(value) {
    this.heap.push(value)
    this.up(this.heap.length - 1)
  }
  /**
   * @Author: wyb
   * @Descripttion: 删除堆顶
   * @param {*}
   */
  pop() {
    // 直接将堆顶设置为堆的最后一个节点
    this.heap[0] = this.heap.pop()
    // 然后执行下移操作 直到当前元素小于父元素
    this.down()
  }
  /**
   * @Author: wyb
   * @Descripttion: 获取堆顶
   * @param {*}
   */
  peek() {
    return this.heap[0]
  }
  /**
   * @Author: wyb
   * @Descripttion: 获取堆的长度
   * @param {*}
   */
  size() {
    return this.heap.length
  }
  /**
   * @Author: wyb
   * @Descripttion: 上移元素
   * @param {*} index 上移的下标
   */
  up(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.up(parentIndex)
    }
  }
  /**
   * @Author: wyb
   * @Descripttion: 下移操作
   * @param {*} index
   */
  down(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.down(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.down(rightIndex)
    }
  }
  /**
   * @Author: wyb
   * @Descripttion: 获取父节点索引
   * @param {*}
   */
  getParentIndex(index) {
    return (index - 1) >> 1
  }
  /**
   * @Author: wyb
   * @Descripttion: 获取子节点索引
   * @param {*} index
   */
  getLeftChildIndex(index) {
    return index * 2 + 1
  }
  /**
   * @Author: wyb
   * @Descripttion: 获取子节点索引
   * @param {*} index
   */
  getRightChildIndex(index) {
    return index * 2 + 2
  }
  /**
   * @Author: wyb
   * @Descripttion: 交换位置
   * @param {*} i1
   * @param {*} i2
   */
  swap(i1, i2) {
    ;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
}

const heap1 = new MinHeap()

heap1.insert(1)
heap1.insert(2)
heap1.insert(0)
heap1.pop()

console.log(heap1.heap)
