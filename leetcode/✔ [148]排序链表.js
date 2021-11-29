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
// 取值+排序+构建新链表
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

// console.log(JSON.stringify(sortList(data)))
// console.log(JSON.stringify(sortList1(data)))
console.log(JSON.stringify(sortList2(data)))

// 分裂+归并
function sortList1(head) {
  function mergeSortRec(head) {
    if (!head || !head.next) {
      return head
    }
    // 获取中间节点
    // - 如果链表长度为奇数，则返回中间节点
    // - 如果链表长度为偶数，则有两个中间节点，这里返回第一个
    let middleNode = function (head) {
      let fast = head,
        slow = head
      while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
      }
      return slow
    }

    // 合并两个有序链表
    let mergeTwoLists = function (l1, l2) {
      let preHead = new ListNode(-1)
      let cur = preHead
      while (l1 && l2) {
        if (l1.val < l2.val) {
          cur.next = l1
          l1 = l1.next
        } else {
          cur.next = l2
          l2 = l2.next
        }
        cur = cur.next
      }
      cur.next = l1 || l2
      return preHead.next
    }
    // 获取中间节点
    let middle = middleNode(head)
    // 分裂成两个链表
    let temp = middle.next
    middle.next = null
    let left = head,
      right = temp
    // 继续分裂（递归分裂）
    left = mergeSortRec(left)
    right = mergeSortRec(right)
    // 合并两个有序链表
    return mergeTwoLists(left, right)
  }
  return mergeSortRec(head)
}
// 取每一个节点+排序+拼接节点
function sortList2(head, r = []) {
  if (!head) return null
  while (head) {
    r.push(head)
    var tmp = head.next
    head.next = null
    head = tmp
  }
  r.sort((a, b) => a.val - b.val).reduce((p, v) => (p.next = v))
  return r[0]
}
