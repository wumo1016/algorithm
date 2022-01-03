/* 最后一块石头的重量(https://leetcode-cn.com/problems/last-stone-weight/)
- 有一堆石头，每块石头的重量都是正整数
- 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎
- 假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下
  - 如果 x == y，那么两块石头都会被完全粉碎
  - 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x
- 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0
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
    const first = this.heap[0]
    if (this.size === 1) return this.heap.pop()
    this.heap[0] = this.heap.pop()
    this.down(0)
    return first
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
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  const heap = new MaxHeap()
  stones.forEach(v => {
    heap.insert(v)
  })
  while (heap.size > 1) {
    const max1 = heap.pop()
    const max2 = heap.pop()
    const v = max1 - max2
    if (v) heap.insert(v)
  }
  return heap.size > 0 ? heap.pop() : 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])) // 1
console.log(lastStoneWeight([7, 6, 7, 6, 9])) // 3
