/* 排序链表(https://leetcode-cn.com/problems/sort-list/description/)
- 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  if (!head || !head.next) return head
  let [cur, list, i] = [head, [], 0]
  while (cur) {
    list.push(cur.val)
    cur = cur.next
  }
  list.sort((a, b) => a - b)
  head = new ListNode(list[0])
  cur = head
  while (++i < list.length) {
    cur.next = new ListNode(list[i])
    cur = cur.next
  }
  return head
}

const data = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3
      }
    }
  }
}

console.log(JSON.stringify(sortList(data)))