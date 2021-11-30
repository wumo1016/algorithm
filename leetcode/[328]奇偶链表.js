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
          val: 5
        }
      }
    }
  }
}

// console.log(JSON.stringify(oddEvenList(data)))
console.log(JSON.stringify(oddEvenList1(data)))

// 优化版 只遍历奇数节点
function oddEvenList1(head) {
  if (!head || !head.next || !head.next.next) return head
  let [odd, acc, fast] = [head, head.next, head.next.next]
  while (fast) {
    const next = fast.next
    // 交换位置
    fast.next = odd.next // 3 => 2
    odd.next = fast // 1 => 3
    acc.next = next // 2 => 4
    // 奇偶指针后移
    odd = odd.next
    acc = next
    // 遍历节点后移
    fast = next && next.next
  }
  return head
}

/* 
奇数指针head从链头向尾每次移动两格。p暂存两格后的第3格
head.next的next指向p.next。head的next指向p。head = p移动两格
迭代后，head指向奇数位最后节点，已不是最初head
需n把偶数位第一节点，最初head.next暂存。与head相连
需m把奇数位第一节点，最初head暂存。返回
*/
var oddEvenList = function (head, m = head) {
  if (head) {
    var n = head.next
    while (head.next && head.next.next) {
      var p = head.next.next
      head.next.next = p.next
      head = head.next = p
    }
    head.next = n
  }
  return m
}


var oddEvenList = function (head, n = head ? head.next : null, p) {
  return (
    head &&
      (head.next && (p = head.next.next)
        ? ((head.next.next = p.next), oddEvenList((head.next = p), n))
        : (head.next = n)),
    head
  )
}
