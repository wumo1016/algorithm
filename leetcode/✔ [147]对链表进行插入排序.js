/* 对链表进行插入排序(https://leetcode-cn.com/problems/insertion-sort-list/description/)
- 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）
- 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
  if (!head || !head.next) return head
  let dummyHead = new ListNode(0)
  // 先将第一个放进去 从第二个开始对比
  dummyHead.next = new ListNode(head.val)
  let cur = head.next
  while (cur) {
    const next = cur.next
    let prev = dummyHead
    while (prev && prev.next) {
      const c = prev.next
      // 找到第一个比当前值大的
      if (c.val >= cur.val) {
        const pNext = prev.next
        cur.next = pNext
        prev.next = cur
        break
      }
      prev = c
    }
    // 没有找到比当前大的
    if (!prev.next) {
      cur.next = null
      prev.next = cur
    }
    cur = next
  }
  return dummyHead.next
}

const data = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: -1,
          next: {
            val: 3,
            next: {
              val: 5
            }
          }
        }
      }
    }
  }
}

console.log(JSON.stringify(insertionSortList(data)))
