/* 从尾到头打印链表(https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)
- 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
*/

/**
 * @param {ListNode} head
 * @return {number[]}
 */
function reversePrint(head) {
  const res = []
  while (head) {
    res.unshift(head.val)
    head = head.next
  }
  return res
}

// 递归
function reversePrint(head) {
  return head ? reversePrint(head.next).concat(head.val) : []
}
