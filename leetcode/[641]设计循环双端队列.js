/* 设计循环双端队列
- 你的实现需要支持以下操作
  MyCircularDeque(k)：构造函数,双端队列的大小为k。
  insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
  insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
  deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
  deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
  getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
  getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
  isEmpty()：检查双端队列是否为空。
  isFull()：检查双端队列是否满了。
*/
/**
 * @param {number} k
 */

var MyCircularDeque = function (k) {
  this.list = []
  this.limit = k
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.list.push(value)
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.list.unshift(value)
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  return this.isEmpty() ? false : !!this.list.pop() || true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  return this.isEmpty() ? false : !!this.list.shift() || true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.list[this.list.length - 1]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.list[0]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.list.length <= 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.list.length >= this.limit
}

const circularDeque = new MyCircularDeque(3) // 设置容量大小为3
console.log(circularDeque.insertLast(1)) // 返回 true
console.log(circularDeque.insertLast(2)) // 返回 true
console.log(circularDeque.insertFront(3)) // 返回 true
console.log(circularDeque.insertFront(4)) // 已经满了，返回 false
console.log(circularDeque.getRear()) // 返回 2
console.log(circularDeque.isFull()) // 返回 true
console.log(circularDeque.deleteLast()) // 返回 true
console.log(circularDeque.insertFront(4)) // 返回 true
console.log(circularDeque.getFront()) // 返回 4
