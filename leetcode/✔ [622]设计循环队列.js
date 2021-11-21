/* 设计循环队列
- 你的实现应该支持如下操作
  MyCircularQueue(k): 构造器，设置队列长度为 k 。
  Front: 从队首获取元素。如果队列为空，返回 -1 。
  Rear: 获取队尾元素。如果队列为空，返回 -1 。
  enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
  deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
  isEmpty(): 检查循环队列是否为空。
  isFull(): 检查循环队列是否已满。
*/

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.list = []
  this.limit = k
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  this.list.unshift(value)
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  return this.isEmpty() ? false : !!this.list.pop() || true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.list[this.list.length - 1]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.list[0]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.list.length <= 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.list.length >= this.limit
}

const circularQueue = new MyCircularQueue(3) // 设置长度为 3
console.log(circularQueue.enQueue(1)) // 返回 true
console.log(circularQueue.enQueue(2)) // 返回 true
console.log(circularQueue.enQueue(3)) // 返回 true
console.log(circularQueue.enQueue(4)) // 返回 false，队列已满
console.log(circularQueue.Rear()) // 返回 3
console.log(circularQueue.isFull()) // 返回 true
console.log(circularQueue.deQueue()) // 返回 true
console.log(circularQueue.enQueue(4)) // 返回 true
console.log(circularQueue.Rear()) // 返回 4
