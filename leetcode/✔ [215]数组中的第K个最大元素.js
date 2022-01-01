/* 数组中的第K个最大元素(https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
- 给定整数数组nums和整数k
- 请返回数组中第k大的元素 第1个最大，以此类推
- 你需要找的是数组排序后的第k个最大的元素，而不是第 k 个不同的元素
- 1 <= k <= nums.length <= 104
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
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.up(parentIndex)
    }
  }
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
 * @return {number}
 */
function findKthLargest(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 4], 4)) // 4

// 利用堆
// 将所有值插入堆 当堆的长度大于k的时候 就将堆顶弹出 这样当所有值插入完毕后 堆顶就是第k大的元素
function findKthLargest(nums, k) {
  const [heap, len] = [new MinHeap(), nums.length]
  for (let i = 0; i < len; i++) {
    heap.insert(nums[i])
    if (heap.size > k) {
      heap.pop()
    }
  }
  return heap.peek()
}
