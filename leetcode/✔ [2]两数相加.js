/* 两数相加
- 给你两个 非空 的链表，表示两个非负的整数
- 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字
- 请你将两个数相加，并以相同形式返回一个表示和的链表
- 题目数据保证列表表示的数字不含前导零
- 0 <= Node.val <= 9
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let [c1, c2, back, head, cur] = [l1, l2, 0]
  while (c1 || c2) {
    let total = (c1 ? c1.val : 0) + (c2 ? c2.val : 0)
    if (back) total++
    let next
    if (total >= 10) {
      back = 1
      next = new ListNode(total % 10)
    } else {
      next = new ListNode(total)
      back = 0
    }
    if (head) {
      cur.next = next
    } else {
      head = next
    }
    cur = next
    c1 = c1 ? c1.next : c1
    c2 = c2 ? c2.next : c2
  }
  if (back) {
    cur.next = new ListNode(1)
  }
  return head
}

const d1 = {
  val: 2,
  next: {
    val: 0,
    next: {
      val: 5,
      next: {
        val: 5
      }
    }
  }
}

const d2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 5
    }
  }
}

console.log(JSON.stringify(addTwoNumbers(d1, d2)))
