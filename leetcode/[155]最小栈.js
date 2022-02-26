/* 最小栈(https://leetcode-cn.com/problems/min-stack/)
- 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈
*/

var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

var minStack = new MinStack()
minStack.push(2)
minStack.push(0)
minStack.push(3)
minStack.push(0)
minStack.pop()
minStack.pop()
minStack.pop()
console.log(minStack.stack, minStack.minStack)
console.log(minStack.getMin())
