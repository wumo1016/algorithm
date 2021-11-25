/* 删除排序链表中重复元素II
- 存在一个按升序排列的链表，给你这个链表的头节点 head
- 请你删除链表中所有存在数字重复情况的节点
- 只保留原始链表中 没有重复出现的数字
- 返回同样按升序排列的结果链表
- -100 <= Node.val <= 100
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针 如果遇到相等的直接移动到不等的那个 然后拼接
function deleteDuplicates(head) {
  if (!head || !head.next) return head
  let dummyHead = new ListNode(101),
    prev = dummyHead,
    cur = head
  while (cur && cur.next) {
    const next = cur.next
    if (cur.val !== next.val) {
      prev.next = cur
      prev = cur
      cur = next
    } else {
      let cur1 = cur
      while (cur1 && cur1.val === cur.val) {
        cur1 = cur1.next
      }
      cur = cur1
      prev.next = cur
    }
  }
  return dummyHead.next
}

const data = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4
          }
        }
      }
    }
  }
}

// console.log(JSON.stringify(deleteDuplicates(data)))
console.log(JSON.stringify(deleteDuplicates1(data)))

// 递归
function deleteDuplicates1(head) {
  if (!head || !head.next) return head
  if (head.val === head.next.val) {
    while (head.next && head.next.val === head.val) head.next = head.next.next
    return deleteDuplicates(head.next)
  } else {
    head.next = deleteDuplicates(head.next)
  }
  return head
}
