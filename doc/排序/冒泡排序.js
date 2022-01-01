/* 冒泡排序
- 比较所有交换顺序 如果后面比前面的大 则交换位置
- 一轮下来 可以保存最后一个元素是最大的
- 这样执行n-1轮 就可以完成排序
- 时间复杂度 O(n^2)
 */

function sort(list) {
  const len = list.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        ;[list[j], list[j + 1]] = [list[j + 1], list[j]]
      }
    }
  }
  return list
}

const data = [3, 4, 4, 5, 3, 21, 5, 6, 4, 3, 22, 5]
console.log(sort(data))
