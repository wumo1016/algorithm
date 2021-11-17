/* 删除链表中的节点
- 请编写一个函数，用于 删除单链表中某个特定节点 
- 无法访问链表的头节点 head ，只能直接访问 要被删除的节点
- 题目数据保证需要删除的节点 不是末尾节点
- 需要删除的节点 node 是 链表中的一个有效节点
- 链表中节点的数目范围是 [2, 1000]
*/

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  const next = node.next
  node.val = next.val
  node.next = next.next
}

const a = { val: 1 }
const b = { val: 2 }
const c = { val: 3 }
const d = { val: 4 }
const e = { val: 5 }
const f = { val: 6 }

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

console.log(a);
deleteNode(c)
console.log(a)
