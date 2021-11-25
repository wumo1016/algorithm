/* 合并K个升序链表
- 给你一个链表数组，每个链表都已经按升序排列
- 请你将所有链表合并到一个升序链表中，返回合并后的链表。
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (lists.length === 1) return lists[0]
  lists = lists.filter(v => !!v)
  if (lists.length === 0) return null
  const minVal = Math.min(...lists.map(v => v.val))
  const res = [],
    len = lists.length
  let dummyNode = new ListNode(0)
  let cur = dummyNode
  for (let i = 0; i < len; i++) {
    const node = lists[i]
    if (node.val === minVal) {
      cur.next = node
      const next = node.next
      if (next) res.push(next)
      cur = cur.next
    } else {
      res.push(node)
    }
  }
  cur.next = mergeKLists(res)
  return dummyNode.next
}

const data1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4
    }
  }
}

const data2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5
      }
    }
  }
}

const data3 = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 5,
        next: {
          val: 7
        }
      }
    }
  }
}

console.log(JSON.stringify(mergeKLists([data1, data2, data3])))
