/* 重排链表
- 给定一个单链表L的头节点head ，单链表L表示为 L0 → L1 → … → Ln - 1 → Ln
- 请将其重新排列后变为: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
- 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 快慢指针 + 反转
function reorderList(head) {
  if (!head || !head.next) return head
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  function reverse(head) {
    if (!head || !head.next) return head
    const newHead = reverse(head.next)
    head.next.next = head
    head.next = null
    return newHead
  }
  ;[fast, slow] = [head, reverse(slow)]
  while (slow && fast.next) {
    const next = fast.next
    const slowNext = slow.next
    slow.next = next
    fast.next = slow
    fast = next
    slow = slowNext
  }
  fast.next = null
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
            val: 6,
            next: {
              val: 7
            }
          }
        }
      }
    }
  }
}

console.log(JSON.stringify(reorderList(data)))
