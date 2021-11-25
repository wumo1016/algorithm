/* 相交链表
- 给你两个单链表的头节点 headA 和 headB
- 请你找出并返回两个单链表相交的起始节点
- 如果两个链表不存在相交节点，返回 null
- 函数返回结果后，链表必须 保持其原始结构
- 保存不存在环
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let [cur1, cur2, map] = [headA, headB, new Set()]
  while (cur1 || cur2) {
    if (cur1 === cur2) return cur1
    if (cur1) {
      if (map.has(cur1)) return cur1
      map.add(cur1)
      cur1 = cur1.next
    }
    if (cur2) {
      if (map.has(cur2)) return cur2
      map.add(cur2)
      cur2 = cur2.next
    }
  }
  return null
}

const n4 = new ListNode(4)
const n5 = new ListNode(5)
const n6 = new ListNode(6)
n4.next = n5
n5.next = n6

const data1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: n4
    }
  }
}

const data2 = {
  val: 4,
  next: {
    val: 2,
    next: n4
  }
}

console.log(JSON.stringify(getIntersectionNode(data1, data2)))
