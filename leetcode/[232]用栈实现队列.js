/* 用栈实现队列(https://leetcode-cn.com/problems/implement-queue-using-stacks/)
- 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty
- 实现 MyQueue 类：
  - void push(int x) 将元素 x 推到队列的末尾
  - int pop() 从队列的开头移除并返回元素
  - int peek() 返回队列开头的元素
  - boolean empty() 如果队列为空，返回 true ；否则，返回 false
- 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可
*/

var MyQueue = function () {
  this.inList = []
  this.outList = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inList.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.inToOut()
  return this.outList.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.inToOut()
  return this.outList[this.outList.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inList.length === 0 && this.outList.length === 0
}
/**
 * @return {void}
 */
MyQueue.prototype.inToOut = function () {
  if (!this.outList.length) {
    while (this.inList.length) {
      this.outList.push(this.inList.pop())
    }
  }
}

const myQueue = new MyQueue()
myQueue.push(1) // queue is: [1]
myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()) // return 1
console.log(myQueue.pop()) // return 1, queue is [2]
console.log(myQueue.empty()) // return false

// in:  1 2 3 4
// out:

// in:
// out: 4 3 2

// in:  5 6 7 8
// out: 4 3 2
