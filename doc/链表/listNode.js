// 节点 + 指针
class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class ListNode {
  constructor() {
    this.head = null
    this.size = 0
  }
  rangeCheck(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('索引越界')
    }
  }
  getNode(index) {
    this.rangeCheck(index)
    let cur = this.head
    while (index--) {
      cur = cur.next
    }
    return cur
  }
  addNode(node, index) {
    this.rangeCheck(index)
    if (typeof index === 'undefined') index = this.size
    if (index == 0) {
      node.next = this.head
      this.head = node
    } else {
      const prev = this.getNode(index - 1)
      node.next = prev.next
      prev.next = node
    }
    this.size++
  }
  removeNode(index) {
    this.rangeCheck(index)
    if (index === 0) {
      this.head = this.head.next
    } else {
      const prev = this.getNode(index - 1)
      prev.next = prev.next?.next || null
    }
    this.size--
  }
  print() {
    let cur = this.head,
      ret = ''
    while (cur) {
      ret += cur.val + '=>'
      cur = cur.next
    }
    ret += 'null'
    
    console.log(ret);
  }
}

// 创建一个链表实例
const list = new ListNode()
// 创建一个节点
list.addNode(new Node('1'))
list.addNode(new Node('2'))
list.addNode(new Node('3'))

list.removeNode(2)

list.print()
