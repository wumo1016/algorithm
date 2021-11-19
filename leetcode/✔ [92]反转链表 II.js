/* 反转链表
- 给你单链表的头指针 head 和两个整数 left 和 right 
- 其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点
- 返回反转后的链表
*/
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

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 暴力拼接 先拿到不需要反转的前段的末尾和后端的开头 再拿到需要的反转的链表进行反转 最后再拼接 前段+反转后链表+后段
function reverseBetween(head, left, right) {
  if (!head) return head
  if (left === right) return head
  let cacheHead = JSON.parse(JSON.stringify(head)),
    oldTail,
    dealHead

  const reverseList = head => {
    let prev = null
    let cur = head
    while (cur) {
      const next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev
  }

  let index = 1
  let cur = head
  while (cur) {
    if (index === left) {
      dealHead = cur
    }
    if (index === right) {
      oldTail = cur.next
      cur.next = null
    }
    index++
    cur = cur.next
  }

  let newHead = reverseList(dealHead)

  // 先拼接尾 将尾拼接到反转后的后边
  if (oldTail) {
    let cur = newHead
    while (cur) {
      const next = cur.next
      if (!next) {
        cur.next = oldTail
        break
      }
      cur = next
    }
  }

  // 拼接头
  if (left > 1) {
    let index = 1
    let cur = cacheHead
    while (cur) {
      const next = cur.next
      if (index + 1 === left) {
        cur.next = newHead
        newHead = cacheHead
        break
      }
      cur = next
      index++
    }
  }

  return newHead
}

// console.log(str(reverseBetween(data, 4, 5)))
// console.log(str(reverseBetween1(data, 1, 2)))
// console.log(str(reverseBetween1(data, 2, 5)))
// console.log(str(reverseBetween1(data, 5, 6)))
// console.log(str(reverseBetween1(data, 1, 6)))
// console.log(str(reverseBetween2(data, 1, 6)))
console.log(str(reverseBetween3(data, 2, 5)))

// 只进行一次循环 动态反转拼接
function reverseBetween1(head, left, right) {
  if (!head || !head.next) return head
  if (left === right) return head
  let prev = null,
    cur = head,
    index = 1,
    fEnd, // 记录不需要反转的第一段 末尾节点
    rStart, // 记录反转后的 头节点
    rEnd, // 记录反转后的 尾节点
    newHead = head
  while (cur) {
    const next = cur.next
    if (index === left) {
      fEnd = prev
      rEnd = cur
      prev && (prev.next = null) // 处理 left = 1
      cur.next = null
    } else if (index > left && index <= right) {
      cur.next = prev
      if (index === right) {
        rStart = cur
        next && (rEnd.next = next) // 处理 right = size
      }
    }
    if (index > right || !next) {
      if (left === 1) {
        newHead = rStart
      } else {
        fEnd.next = rStart
      }
      break
    }
    prev = cur
    cur = next
    index++
  }
  return newHead
}

// 穿针引线
function reverseBetween2(head, left, right) {
  if (!head || !head.next) return head
  if (left === right) return head
  const reverseLinkedList = head => {
    let pre = null
    let cur = head

    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
  }

  let dummyHead = new ListNode(-1)
  dummyHead.next = head

  // 获取不需要反转前一段的尾部节点
  let fEnd = dummyHead
  for (let i = 0; i < left - 1; i++) {
    fEnd = fEnd.next
  }

  // 获取需要反转的链表 创建一个子链表
  let sStart = fEnd.next // 子链表的头节点
  let sEnd = fEnd // 子链表的尾节点
  for (let i = 0; i < right - left + 1; i++) {
    sEnd = sEnd.next
  }

  // 获取不需要反转后一段的开始节点
  let lStart = sEnd.next

  // 切断前后链接
  fEnd.next = null
  sEnd.next = null

  // 反转子链表
  reverseLinkedList(sStart)

  // 拼接
  fEnd.next = sEnd
  sStart.next = lStart

  return dummyHead.next
}

// 头插法
function reverseBetween3(head, left, right) {
  if (!head || !head.next) return head
  if (left === right) return head
  const dummy_node = new ListNode(-1)
  dummy_node.next = head

  let pre = dummy_node
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  let cur = pre.next
  for (let i = 0; i < right - left; i++) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummy_node.next
}

function str(s) {
  return JSON.stringify(s)
}
