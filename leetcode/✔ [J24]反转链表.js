/* 反转链表https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)
- 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点
*/

function reverseList(head) {
  if (!head || !head.next) return head
  let prev = null
  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
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

console.log(JSON.stringify(reverseList(data)))

function reverseList(head) {
  if (!head || !head.next) return head
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
