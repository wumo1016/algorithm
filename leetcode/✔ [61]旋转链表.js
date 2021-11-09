/* 旋转链表
- 给你一个链表的头节点 head 
- 旋转链表，将链表每个节点向右移动 k 个位置
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  if (head == null || head.next == null) return head

  let nodeNum = 0
  let cur = head
  while (cur) {
    nodeNum++
    cur = cur.next
  }

  if (k > nodeNum) {
    k = k % nodeNum
  }

  let newHead = head
  for (let i = 0; i < k; i++) {
    let cur = newHead
    while (cur) {
      const next = cur.next
      nextNext = next.next
      if (!nextNext) {
        cur.next = null
        next.next = newHead
        newHead = next
        break
      }
      cur = next
    }
  }

  return newHead
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
          val: 5
        }
      }
    }
  }
}

console.log(JSON.stringify(rotateRight(data, 7)))
