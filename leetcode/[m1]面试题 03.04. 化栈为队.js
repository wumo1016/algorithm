/* 面试题 03.04. 化栈为队(https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)
- 实现一个MyQueue类，该类用两个栈来实现一个队列。
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.list = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.list.shift()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.empty() ? false : this.list[0]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.list.length <= 0
}

const queue = new MyQueue()

queue.push(1)
queue.push(2)
console.log(queue.peek()) // 返回 1
console.log(queue.pop()) // 返回 1
console.log(queue.empty()) // 返回 false
