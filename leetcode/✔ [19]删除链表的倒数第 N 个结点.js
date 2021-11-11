/* 删除链表的倒数第 N 个结点
- 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
*/

/**
 * @param {ListNode} head
 * @param {number} n 1 <= n <= size
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
  let size = 0

  ;(function () {
    let cur = head
    while (cur) {
      cur = cur.next
      size++
    }
  })()

  if (n === size) return head.next

  let i = 1
  let cur = head
  while (cur.next) {
    let next = cur.next
    if (size - i === n) {
      cur.next = next.next
      break
    }
    cur = next
    i++
  }
  return head
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

console.log(JSON.stringify(removeNthFromEnd(data, 2)))
