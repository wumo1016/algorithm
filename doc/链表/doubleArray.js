/*
 * @Description: 
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2021-11-10 21:06:43
 */
// 节点 + 指针
class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function ListNode() {
  let head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  console.log(head)

  let p = head,
    ret = ''
  while (p) {
    ret += `${p.val} => `
    p = p.next
  }
  ret += 'null'
  console.log(ret)
}
ListNode()

// 双数组
function DoubleArray() {
  const data = [] // 数据
  const next = [] // 指针

  function addNode(index, p, value) {
    next[p] = next[index]
    next[index] = p
    data[p] = value
  }

  let head = 3
  data[3] = 'a'

  addNode(3, 5, 'b')
  addNode(5, 7, 'c')
  addNode(7, 2, 'd')
  addNode(2, 1, 'e')
  addNode(7, 4, 'f')

  let p = head,
    ret = ''
  while (p) {
    ret += `${data[p]} => `
    p = next[p]
  }
  ret += null
  console.log(ret)
}
DoubleArray()
