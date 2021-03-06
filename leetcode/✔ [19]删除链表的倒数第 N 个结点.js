/* 删除链表的倒数第 N 个结点
- 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
- 1 <= size <= 3
- 1 <= n <= size
*/

/**
 * @param {ListNode} head
 * @param {number} n 1 <= n <= size
 * @return {ListNode}
 */
// 计算长度
function removeNthFromEnd(head, n) {
  let size = 0
  ;(function () {
    let cur = head
    while (cur) {
      cur = cur.next
      size++
    }
  })()
  if (n === size) return head.next
  let i = 1
  let cur = head
  while (cur.next) {
    let next = cur.next
    if (size - i === n) {
      cur.next = next.next
      break
    }
    cur = next
    i++
  }
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
            val: 6
          }
        }
      }
    }
  }
}

// console.log(JSON.stringify(removeNthFromEnd(data, 1)))
// console.log(JSON.stringify(removeNthFromEnd1(data, 1)))
console.log(JSON.stringify(removeNthFromEnd2(data, 1)))

// 利用数组索引删除
function removeNthFromEnd1(head, n) {
  const arr = []
  let cur = head
  while (cur) {
    arr.unshift(cur)
    cur = cur.next
  }
  if (n === arr.length) return head.next
  arr[n].next = arr[n - 2] || null
  return head
}
// 双指针
function removeNthFromEnd2(head, n) {
  let fast = head,
    slow = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (!fast) return head.next
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return head
}
