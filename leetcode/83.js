/* 删除排序链表中重复元素
- 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素只出现一次，返回同样按升序排列的结果链表。
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let cur = head
  while (cur) {
    let next = cur.next
    if (next && cur.val === next.val) {
      cur.next = next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

const data1 = {
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

const data2 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1
    }
  }
}

console.log(deleteDuplicates(data1))
console.log(deleteDuplicates(data2))

/* // 官方题解
function deleteDuplicates(head) {
  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
} */
