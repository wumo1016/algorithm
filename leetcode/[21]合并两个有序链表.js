/* 合并两个有序链表
- 将两个升序链表合并为一个新的 升序 链表并返回。
- 链表是通过拼接给定的两个链表的所有节点组成的
- -100 <= Node.val <= 100
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let [cur1, cur2, head] = [l1, l2, new ListNode(0)]
  let cur = head
  while (cur1 || cur2) {
    const [val1, val2, next1, next2] = [
      cur1 && typeof cur1.val === 'number' ? cur1.val : 101,
      cur2 && typeof cur2.val === 'number' ? cur2.val : 101,
      cur1 && cur1.next,
      cur2 && cur2.next
    ]
    if (val1 <= val2) {
      cur.next = cur1
      cur1.next = null
      cur1 = next1
      cur = cur.next
    } else if (val2 < val1) {
      cur.next = cur2
      cur2.next = null
      cur2 = next2
      cur = cur.next
    }
  }
  return head.next
}

const data1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4
    }
  }
}

const data2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4
    }
  }
}

console.log(JSON.stringify(mergeTwoLists(data1, data2)))
