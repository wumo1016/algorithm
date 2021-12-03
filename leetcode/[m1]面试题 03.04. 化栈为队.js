/* 面试题 03.04. 化栈为队(https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)
- 实现一个MyQueue类，该类用两个栈来实现一个队列。
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {}

const queue = new MyQueue()

queue.push(1)
queue.push(2)
queue.peek() // 返回 1
queue.pop() // 返回 1
queue.empty() // 返回 false
