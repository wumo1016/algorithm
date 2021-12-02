/* 两数相加 II(https://leetcode-cn.com/problems/add-two-numbers-ii/description/)
- 给你两个 非空 链表来代表两个非负整数 数字最高位位于链表开始位置
- 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
- 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
- 链表的长度范围为 [1, 100]
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let [s1, s2, s] = [[], [], []]
  while (l1 || l2) {
    if (l1) {
      s1.unshift(l1.val)
      l1 = l1.next
    }
    if (l2) {
      s2.unshift(l2.val)
      l2 = l2.next
    }
  }

  let prev = 0
  l1 = s1.shift()
  l2 = s2.shift()
  while (!isNaN(l1) || !isNaN(l2)) {
    let t = (l1 || 0) + (l2 || 0) + prev
    if (t > 9) {
      s.unshift(t % 10)
      prev = 1
    } else {
      s.unshift(t)
      prev = 0
    }
    l1 = s1.shift()
    l2 = s2.shift()
  }
  if (prev) s.unshift(1)
  let newHead = new ListNode(0)
  s.reduce((res, cur) => (res.next = new ListNode(cur)), newHead)
  return newHead.next
}

const d1 = {
  val: 7,
  next: {
    val: 4,
    next: {
      val: 4,
      next: {
        val: 3
      }
    }
  }
}

const d2 = {
  val: 2,
  next: {
    val: 6,
    next: {
      val: 4,
      next: {
        val: 4
      }
    }
  }
}

console.log(JSON.stringify(addTwoNumbers(d1, d2)))
