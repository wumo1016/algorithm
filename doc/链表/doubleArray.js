class ListNode {
  constructor(head, value) {
    this.data = [] // 结点集合
    this.next = [] // 下一个索引集合
    this.head = head // 头节点索引
    this.data[head] = value
  }
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} index 节点所对应的索引
   * @param {*} nextIndex 添加的节点值对应的索引
   * @param {*} value 添加的节点对应的值
   */
  add(index, nextIndex, value) {
    this.next[index] = nextIndex
    this.data[nextIndex] = value
  }
  print() {
    let cur = this.head,
      ret = ''
    while (cur) {
      ret += this.data[cur] + '=>'
      cur = this.next[cur]
    }
    ret += 'null'

    console.log(ret)
  }
}

let list = new ListNode(1, 'A')

list.add(1, 4, 'B')
list.add(4, 6, 'C')

list.print()
