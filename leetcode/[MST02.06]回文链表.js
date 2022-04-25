/* 回文链表(https://leetcode-cn.com/problems/palindrome-linked-list-lcci/)
- 编写一个函数，检查输入的链表是否是回文的。
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
function isPalindrome(head) {
  if (!head || !head.next) return true
  const list = []
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    list.push(slow.val)
    fast = fast.next.next
    slow = slow.next
  }
  if (fast) slow = slow.next
  while (slow) {
    if (slow.val !== list.pop()) return false
    slow = slow.next
  }
  return true
}

// 数组
function isPalindrome(head) {
  if (!head || !head.next) return true
  let [slow, list] = [head, []]
  while (slow) {
    list.push(slow.val)
    slow = slow.next
  }
  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    if (list[i] !== list[j]) return false
  }
  return true
}

// 快慢指针 + 反转链表 => 时间复杂度O(n) 空间复杂度O(1)
function isPalindrome(head) {
  if (!head || !head.next) return true
  const reverseList = head => {
    let prev = null
    while (head) {
      const next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev
  }
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast) slow = slow.next
  slow = reverseList(slow)
  while (slow) {
    if (head.val !== slow.val) return false
    head = head.next
    slow = slow.next
  }
  return true
}
