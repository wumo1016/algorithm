/* 两两交换链表中的节点
- 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
function swapPairs(head) {
  if (!head || !head.next) return head
  let cur = head
  head = cur.next
  let prev = null
  while (cur && cur.next) {
    const next = cur.next
    const nextNext = next.next
    ;[next.next, cur.next] = [cur, nextNext]
    if (prev) prev.next = next
    ;[prev, cur] = [cur, nextNext]
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

// console.log(JSON.stringify(swapPairs(data)))
console.log(JSON.stringify(swapPairs1(data)))

// 递归
function swapPairs1(head) {
  if (!head || !head.next) return head
  const newHead = head.next
  head.next = swapPairs1(newHead.next)
  newHead.next = head
  return newHead
}
