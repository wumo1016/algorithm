/* 设计哈希映射(https://leetcode-cn.com/problems/design-hashmap/)
- 给定一个整数数组 nums 和一个整数目标值 target
- 在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
- 默认每种输入只会对应一个答案 且数组中同一个元素在答案里不能重复出现
- 2 <= nums.length <= 104
*/

var MyHashMap = function () {
  this.data = {}
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return Reflect.ownKeys(this.data).includes(String(key)) ? this.data[key] : -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  Reflect.deleteProperty(this.data, key)
}

const myHashMap = new MyHashMap()
myHashMap.put(1, 1) // myHashMap 现在为 [[1,1]]
myHashMap.put(2, 2) // myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(1)) // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(3)) // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
myHashMap.put(2, 1) // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
console.log(myHashMap.get(2)) // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
myHashMap.remove(2) // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
console.log(myHashMap.get(2)) // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
