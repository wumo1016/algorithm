/* 设计哈希集合(https://leetcode-cn.com/problems/design-hashset/)
- 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
- 实现 MyHashSet 类：
  - void add(key) 向哈希集合中插入值 key 。
  - bool contains(key) 返回哈希集合中是否存在这个值 key 。
  - void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
*/

var MyHashSet = function () {
  this.set = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) this.set.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let index = this.set.indexOf(key)
  if (index > -1) {
    this.set.splice(index, 1)
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.includes(key)
}
