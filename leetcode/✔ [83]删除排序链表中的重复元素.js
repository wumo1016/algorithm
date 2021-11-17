/* 删除排序链表中重复元素
- 存在一个按升序排列的链表 给你这个链表的头节点 head
- 请你删除所有重复的元素，使每个元素只出现一次
- 返回同样按升序排列的结果链表。
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head || !head.next) return head
  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

const data = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3
      }
    }
  }
}

console.log(deleteDuplicates(data))
