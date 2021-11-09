/* 链表反转
- 给你单链表的头节点 head
- 请你反转链表，并返回反转后的链表。
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  if (!head) return head
  let cur = head.next
  head.next = null
  while (cur) {
    const next = cur.next
    cur.next = head
    head = cur
    cur = next
  }
  return head
}

const data1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
}

console.log(JSON.stringify(reverseList(data1)))

/* // 官方题解 - 迭代
function reverseList(head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
} */

/* // 官方题解 - 递归
function reverseList(head) {
  if (head == null || head.next == null) {
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
} */
