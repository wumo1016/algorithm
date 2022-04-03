/* 删除链表的节点(https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
- 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
- 返回删除后的链表的头节点
- 题目保证链表中节点的值互不相同
*/

function ListNode(val, next) {
  this.val = val
  this.next = next
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 双指针
function deleteNode(head, val) {
  const newHead = new ListNode(null, head)
  let [cur, next] = [newHead, head]
  while (next) {
    if (next.val === val) {
      cur.next = next.next
      break
    }
    ;[cur, next] = [next, next.next]
  }
  return newHead.next
}

const data = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9
      }
    }
  }
}
console.log(deleteNode(data, 9))

// 单指针
function deleteNode(head, val) {
  if (head.val === val) return head.next
  let cur = head
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      break
    }
    cur = cur.next
  }
  return head
}

// 递归
function deleteNode(head, val) {
  if (head.val === val) return head.next
  head.next = deleteNode(head.next, val)
  return head
}
