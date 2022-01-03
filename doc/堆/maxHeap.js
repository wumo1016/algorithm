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

const heap1 = new MaxHeap()

heap1.insert(1)
heap1.insert(2)
heap1.insert(0)

console.log(heap1.heap)
