/* 删除排序链表中重复元素 */

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
