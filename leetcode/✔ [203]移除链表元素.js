/* 两数之和
- 给你一个链表的头节点 head 和一个整数 val
- 请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点
- 0 <= val <= 50
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 迭代
function removeElements(head, val) {
  if (!head) return head
  const dummyHead = new ListNode(-1)
  dummyHead.next = head
  let cur = dummyHead
  while (cur.next) {
    const next = cur.next
    if (next.val === val) {
      cur.next = next.next
    } else {
      cur = cur.next
    }
  }
  return dummyHead.next
}

const data = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 1,
          next: {
            val: 1
          }
        }
      }
    }
  }
}

// console.log(JSON.stringify(removeElements(data, 1)))
console.log(JSON.stringify(removeElements1(data, 1)))

// 递归
function removeElements1(head, val) {
  if (!head) return head
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}
