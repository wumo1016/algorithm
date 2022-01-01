/* 前 K 个高频元素(https://leetcode-cn.com/problems/top-k-frequent-elements/)
- 给定整数数组nums和整数k
- 请你返回其中出现频率前k高的元素
- 你可以按任意顺序返回答案
*/

class MinHeap {
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
    this.heap[0] = this.heap.pop()
    this.down(0)
  }
  peek() {
    return this.heap[0]
  }
  up(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex]['value'] > this.heap[index]['value']) {
      this.swap(parentIndex, index)
      this.up(parentIndex)
    }
  }
  down(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex]['value'] < this.heap[index]['value']
    ) {
      this.swap(leftIndex, index)
      this.down(leftIndex)
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex]['value'] < this.heap[index]['value']
    ) {
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const map = new Map()
  nums.forEach(v => {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1)
  })
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(v => v[0])
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]

// 利用堆
function topKFrequent(nums, k) {
  const map = new Map()
  nums.forEach(v => {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1)
  })
  const heap = new MinHeap()
  map.forEach((value, key) => {
    heap.insert({ value, key })
    if (heap.size > k) heap.pop()
  })
  return heap.heap.map(v => v.key)
}
