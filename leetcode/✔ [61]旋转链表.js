/* 旋转链表
- 给你一个链表的头节点 head 
- 旋转链表，将链表每个节点向右移动 k 个位置
- 0 <= k <= 2 * 10
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 每次移动1个位置 移动k次
function rotateRight(head, k) {
  if (k === 0 || !head || !head.next) return head

  let nodeNum = 0
  let cur = head
  while (cur) {
    nodeNum++
    cur = cur.next
  }

  if (k > nodeNum) {
    k = k % nodeNum
  }

  let newHead = head
  for (let i = 0; i < k; i++) {
    let cur = newHead
    while (cur) {
      const next = cur.next
      nextNext = next.next
      if (!nextNext) {
        cur.next = null
        next.next = newHead
        newHead = next
        break
      }
      cur = next
    }
  }

  return newHead
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

// console.log(JSON.stringify(rotateRight(data, 7)))
console.log(JSON.stringify(rotateRight1(data, 7)))

// 利用环形链表
function rotateRight1(head, k) {
  if (!head || !head.next || k === 0) return head
  // 获取最后一个节点
  let last = head,
    l = 1
  while (last.next) {
    last = last.next
    l++
  }
  // 向右滑移动n位 就得找到倒数第n-1位节点
  // 1 2 3 4 5 6 比如向右移动1位 就是拿到5 head = 5.next  5.next = null
  k = l - (k % l)
  if (k === l) return head
  // 连接成环
  last.next = head
  // 找到n-1位节点
  let prev = head
  while (--k) {
    prev = prev.next
  }
  const newHead = prev.next
  prev.next = null
  return newHead
}
