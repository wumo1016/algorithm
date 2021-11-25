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

// console.log(JSON.stringify(getIntersectionNode(data1, data2)))
console.log(JSON.stringify(getIntersectionNode1(data1, data2)))

// 先遍历一个链表 都存起来 然后遍历另一个链表 寻找重复项
function getIntersectionNode1(headA, headB) {
  const visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}

// A的长度为m B的长度为n
// 相交的部分有c个节点 如果 m-c = n-c 即同时到达
// 否则 m+n===n+m 两者一定同时到达离终点c处
function getIntersectionNode2(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA,
    pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}
