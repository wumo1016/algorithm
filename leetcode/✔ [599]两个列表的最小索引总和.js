/* 两个列表的最小索引总和(https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/)
- 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示
- 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅
- 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在
- list1、list2 的所有字符串都是 唯一 的
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  let [len1, len2, map, min, res] = [
    list1.length,
    list2.length,
    new Map(),
    Infinity,
    []
  ]
  for (let i = 0; i < len1; i++) {
    if (!map.has(list1[i])) map.set(list1[i], i)
  }
  for (let i = 0; i < len2; i++) {
    if (i > min) break
    if (map.has(list2[i])) {
      const exist = map.get(list2[i])
      if (exist + i < min) {
        min = exist + i
        res = [list2[i]]
      } else if (exist + i === min) {
        res.push(list2[i])
      }
    }
  }
  return res
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun'
    ]
  )
) // ["Shogun"]

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
) // ["Shogun"]
