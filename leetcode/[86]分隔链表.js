/* 分隔链表
- 给你一个链表的头节点 head 和一个特定值 x
- 使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前
- 保留两个分区中每个节点的初始相对位置
- 200 <= x <= 200
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 找到第一个比val小的作为头节点 大于等于val的位置不变
function partition(head, x) {
  let [left, right, cur] = [new ListNode(-1), new ListNode(-1), head]
  let [dummyHead, righthead] = [left, right]
  while (cur) {
    const next = cur.next,
      val = cur.val
    if (val < x) {
      left.next = cur
      left = cur
    } else if (val >= x) {
      right.next = cur
      right = cur
    }
    cur = next
  }
  right.next = null
  left.next = righthead.next
  return dummyHead.next
}

const data = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2
          }
        }
      }
    }
  }
}

console.log(JSON.stringify(partition(data, 3)))
