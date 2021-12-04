/* 面试题 03.04. 化栈为队(https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)
- 实现一个MyQueue类，该类用两个栈来实现一个队列。
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.queue1 = []
  this.queue2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue1.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 先将第一个后面的所有元素都放到list2中
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.pop())
  }
  // 取出最后一个
  const res = this.queue1.pop() || false
  while (this.queue2.length) {
    this.queue1.push(this.queue2.pop())
  }
  return res
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 先将第一个后面的所有元素都放到list2中
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.pop())
  }
  // 取出最后一个
  const res = this.queue1[0] || false
  while (this.queue2.length) {
    this.queue1.push(this.queue2.pop())
  }
  return res
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue1.length <= 0
}

const queue = new MyQueue()

queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.peek()) // 返回 1
console.log(queue.pop()) // 返回 1
console.log(queue.pop()) // 返回 2
console.log(queue.pop()) // 返回 3
console.log(queue.empty()) // 返回 false
