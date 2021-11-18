/* 链表反转
- 给你单链表的头节点 head
- 请你反转链表，并返回反转后的链表。
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
function reverseList(head) {
  if (!head || !head.next) return head
  let cur = head
  let prev = null
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

const data = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6
          }
        }
      }
    }
  }
}

// console.log(JSON.stringify(reverseList(data)))
console.log(JSON.stringify(reverseList1(data)))

// 递归
function reverseList1(head) {
  if (head == null || head.next == null) {
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
