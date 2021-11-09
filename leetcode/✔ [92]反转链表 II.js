/* 反转链表
- 给你单链表的头指针 head 和两个整数 left 和 right 
- 其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点
- 返回反转后的链表
*/
const data1 = {
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

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
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

console.log(str(reverseBetween(data1, 4, 5)))

function str(s) {
  return JSON.stringify(s)
}
