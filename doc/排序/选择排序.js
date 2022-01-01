/* 选择排序
- 第一次找到最小值 放在第一位
- 第二次找到第二小值 放在第二位
- 执行 n-1 次 即完成排序
- 时间复杂度 O(n^2)
 */

/* 选择排序
- 重复 n-1 次
  - 把第一个没有排序过的元素设置为最小值
    - 遍历每个没有排序过的元素
      - 如果元素 < 现在的最小值
  - 将最小值和第一个没有排序过的位置交换
 */

function sort(list) {
  const len = list.length
  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (list[j] < list[min]) min = j
    }
    if (min !== i) [list[i], list[min]] = [list[min], list[i]]
  }
  return list
}

const data = [3, 4, 4, 5, 3, 2, 5, 6, 4, 3, 22, 5, 3]
console.log(sort(data))
