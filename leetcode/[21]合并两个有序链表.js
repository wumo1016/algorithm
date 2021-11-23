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
  let cur = (head = new ListNode(0))
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2
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
