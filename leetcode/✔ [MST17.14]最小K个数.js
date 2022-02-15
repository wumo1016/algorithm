/* 最小K个数(https://leetcode-cn.com/problems/smallest-k-lcci/)
- 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可
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
    if (this.size === 1) return this.heap.pop()
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
function smallestK(arr, k) {
  const heap = new MaxHeap()
  for (const val of arr) {
    heap.insert(val)
    if (heap.size > k) heap.pop()
  }
  return heap.heap
}

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4)) // [1,2,3,4]

function smallestK(arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}
