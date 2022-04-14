/* 反转链表(https://leetcode-cn.com/problems/UHnkqh/)
- 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null
  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    if (!next) return head
    head = next
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

console.log(JSON.stringify(reverseList(data)))

// 递归
function reverseList(head) {
  if (!head || !head.next) return head
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
