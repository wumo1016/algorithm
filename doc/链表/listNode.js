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
  /**
   * @Author: wyb
   * @Descripttion: 通过index获取节点
   * @param {*} index
   */
  getNode(index) {
    let cur = this.head
    while (index--) {
      cur = cur.next
    }
    return cur
  }
  /**
   * @Author: wyb
   * @Descripttion: 添加节点
   * @param {*} node
   * @param {*} index
   */
  addNode(node, index) {
    if (index < 0) {
      throw new Error('index必须为大于0的数字')
    }
    if (index > this.size + 1) {
      throw new Error(`index超过最大长度${this.size + 1}`)
    }
    if (typeof index === 'undefined') index = this.size
    if (index === this.size + 1) index = this.size
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
  /**
   * @Author: wyb
   * @Descripttion: 移除节点
   * @param {*} index
   */
  removeNode(index) {
    if (index === 0) {
      this.head = this.head.next
    } else if (index > this.size - 1) {
      throw new Error(`index超过最大索引${this.size - 1}`)
    } else {
      const prev = this.getNode(index - 1)
      prev.next = prev.next?.next || null
    }
    this.size--
  }
}

// 创建一个链表实例
const list = new ListNode()
// 创建一个节点
list.addNode(new Node('1'))
list.addNode(new Node('2'))
list.addNode(new Node('3'))

list.removeNode(0)

console.log(JSON.stringify(list.head))
