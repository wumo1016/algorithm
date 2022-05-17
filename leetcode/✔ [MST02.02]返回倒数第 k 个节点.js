/* 返回倒数第 k 个节点(https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/)
- 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
- 给定的 k 保证是有效的。
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
function kthToLast(head, k) {
  const res = []
  while (head) {
    res.unshift(head.val)
    head = head.next
  }
  return res[k - 1]
}

function kthToLast(head, k) {
  let num = 0
  const loop = cur => {
    if (!cur) return
    if (num === k) return cur.val
    const res = loop(cur.next)
    num++
    return res
  }
  return loop(head)
}
