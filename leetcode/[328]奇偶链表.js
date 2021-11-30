/* 奇偶链表(https://leetcode-cn.com/problems/odd-even-linked-list/description/)
- 给给定一个单链表，把所有的奇数节点和偶数节点分别排在一起
- 这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性
- 应当保持奇数节点和偶数节点的相对顺序
- 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 每次拿到最后一个偶节点 最后一个奇节点 然后拼接
function oddEvenList(head) {
  if (!head || !head.next || !head.next.next) return head
  let [odd, acc, cur, i] = [head, head.next, head.next.next, 3]
  while (cur) {
    const next = cur.next
    if (i % 2 === 1) {
      cur.next = odd.next
      odd.next = cur
      odd = odd.next
      acc.next = next
    } else {
      acc = cur
    }
    cur = next
    i++
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

console.log(JSON.stringify(oddEvenList(data)))
