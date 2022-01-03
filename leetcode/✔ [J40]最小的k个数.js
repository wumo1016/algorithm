/* 最小的k个数(https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
- 输入整数数组 arr 找出其中最小的k个数
*/

class MaxHeap {
  constructor() {
    this.heap = []
  }
  get size() {
    return this.heap.length
  }
  insert(value) {
    this.heap.push(value)
    this.up(this.heap.length - 1)
  }
  pop() {
    if (this.size === 1) return this.heap.shift()
    this.heap[0] = this.heap.pop()
    this.down(0)
  }
  peek() {
    return this.heap[0]
  }
  up(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index)
      this.up(parentIndex)
    }
  }
  down(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index)
      this.down(leftIndex)
    }
    if (this.heap[rightIndex] > this.heap[index]) {
      this.swap(rightIndex, index)
      this.down(rightIndex)
    }
  }
  getParentIndex(index) {
    return (index - 1) >> 1
  }
  getLeftChildIndex(index) {
    return index * 2 + 1
  }
  getRightChildIndex(index) {
    return index * 2 + 2
  }
  swap(i1, i2) {
    ;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function getLeastNumbers(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k)
}

console.log(getLeastNumbers([3, 2, 1], 2)) // [1,2]
console.log(getLeastNumbers([0, 1, 2, 1], 1)) // [0]
console.log(getLeastNumbers([0, 0, 0, 2, 0, 5], 0)) // []

// 利用堆
function getLeastNumbers(arr, k) {
  const heap = new MaxHeap()
  arr.forEach(v => {
    heap.insert(v)
    if (heap.size > k) {
      console.log(123)
      heap.pop()
    }
  })
  return heap.heap
}
