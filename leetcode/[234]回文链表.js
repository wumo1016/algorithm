/* 回文链表
- 给你一个单链表的头节点 head
- 请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

const data = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1
          }
        }
      }
    }
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针+栈
function isPalindrome(head) {
  if (!head || !head.next) return true
  let [stack, fast, slow] = [[], head, head]
  while (fast && fast.next) {
    stack.push(slow.val)
    slow = slow.next
    fast = fast.next.next
  }
  if (fast) stack.push(slow.val)
  while (slow) {
    if (stack.pop() !== slow.val) return false
    slow = slow.next
  }
  return true
}

console.log(JSON.stringify(isPalindrome(data)))
