/* 链表的中间结点(https://leetcode-cn.com/problems/middle-of-the-linked-list/)
- 给定一个头结点为 head 的非空单链表，返回链表的中间结点
- 如果有两个中间结点，则返回第二个中间结点
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
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
          val: 5
        }
      }
    }
  }
}

console.log(middleNode(data))
