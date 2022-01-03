/* 数据流中的第 K 大元素(https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)
- 设计一个找到数据流中第 k 大元素的类（class）
- 注意是排序后的第 k 大元素，不是第 k 个不同的元素
- 请实现 KthLargest 类
  - KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象
  - int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素
*/

class MinHeap {
  constructor(heap = []) {
    this.heap = [...heap]
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
    const f = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.down(0)
    return f
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
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinHeap()
  this.insert = val => {
    this.heap.insert(val)
    if (this.heap.size > k) this.heap.pop()
  }
  nums.forEach(v => {
    this.insert(v)
  })
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.insert(val)
  return this.heap.peek()
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2])
kthLargest.add(3) // return 4
kthLargest.add(5) // return 5
kthLargest.add(10) // return 5
kthLargest.add(9) // return 8
kthLargest.add(4) // return 8
