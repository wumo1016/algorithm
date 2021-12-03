/* 分隔链表(https://leetcode-cn.com/problems/split-linked-list-in-parts/description/)
- 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
- 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null
- 这 k 个部分应该按照在链表中出现的顺序排列
- 并且排在前面的部分的长度应该大于或等于排在后面的长度
- 返回一个由上述 k 部分组成的数组
- 0 <= Node.val <= 1000
- 1 <= k <= 50
*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
function splitListToParts(head, k) {
  let [fast, len, res] = [head, 0, []]
  while (fast && fast.next) {
    fast = fast.next.next
    len += 2
  }
  if (fast) len++
  // k大于链表长度
  if (k > len) {
    let i = 0,
      cur = head
    while (i++ < k) {
      res.push(cur ? new ListNode(cur.val) : null)
      cur = cur && cur.next
    }
    return res
  }
  // 包含小数点
  let num = len / k
  if (String(num).includes('.')) {
    let m = Math.ceil(num)
    let n = Math.floor(num)

    // 计算最大m数 可能会出现多个匹配结果 以m最多的为准
    num = Math.ceil(len / m)

    let i = num
    while (i-- > 0) {
      j = (len - m * i) / n
      if (!String(j).includes('.') && i + j === k) {
        let x = 0,
          cur = head
        while (x++ < i) {
          let y = 0
          let dummyHead = new ListNode(0)
          let prev = dummyHead
          while (y++ < m) {
            prev.next = cur
            prev = cur
            cur = cur.next
          }
          prev.next = null
          res.push(dummyHead.next)
        }
        x = 0
        while (x++ < j) {
          let y = 0
          let dummyHead = new ListNode(0)
          let prev = dummyHead
          while (y++ < n) {
            prev.next = cur
            prev = cur
            cur = cur.next
          }
          prev.next = null
          res.push(dummyHead.next)
        }
        return res
      }
    }
    return res
  } else {
    let i = 0,
      cur = head
    while (i++ < k) {
      j = 0
      let dummyHead = new ListNode(0)
      let prev = dummyHead
      while (j++ < num) {
        prev.next = cur
        prev = cur
        cur = cur.next
      }
      prev.next = null
      res.push(dummyHead.next)
    }
    return res
  }
}

const data1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const data2 = {
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

const data = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3
    }
  }
}

console.log(JSON.stringify(splitListToParts(data2, 4)))
