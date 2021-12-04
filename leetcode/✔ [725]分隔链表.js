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
function splitListToParts1(head, k) {
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

// console.log(JSON.stringify(splitListToParts(data1, 11)))
// console.log(splitListToParts(data, 2))
console.log(splitListToParts(data1, 4))
// console.log(splitListToParts(data1, 3))

// 利用数组先将所有节点储存起来
function splitListToParts2(head, k) {
  let [queue, cur] = [[], head]
  // 利用队列将节点储存起来
  while (cur) {
    queue.push(new ListNode(cur.val))
    cur = cur.next
  }
  // 计算链表长度
  const len = queue.length
  // k大于链表长度
  const diff = k - len
  if (diff >= 0) {
    return queue.concat(Array(diff).fill(null))
  }
  // m(添加几次) n(每次添加几个)
  const pushQueue = (m, n) => {
    let i = 0
    while (i++ < m) {
      const dummyHead = queue[0]
      queue.splice(0, n).reduce((res, cur) => (res.next = cur))
      res.push(dummyHead)
    }
  }
  // 计算每个部分的长度
  const [l, res] = [len / k, []]
  if (String(l).includes('.')) {
    // 计算最大长度和最小长度
    const [max, min] = [Math.ceil(l), Math.floor(l)]
    // 计算最大长度可出现的最大次数
    let [maxLen, minLen] = [Math.ceil(len / max), 0]
    while (maxLen-- > 0) {
      minLen = (len - maxLen * max) / min
      if (maxLen + minLen === k) {
        pushQueue(maxLen, max)
        pushQueue(minLen, min)
      }
    }
  } else {
    pushQueue(k, l)
  }
  return res
}

// 利用数学思路
/* l(除数) k(被除数) q(商) r(余数) 11 = 4 * 2 + 3 => 11 = 3 * (2 + 1) + (4 - 2) * 2
l = k * q + r = kq + r
l = r * (q + 1) + (k - r) * q = rq + r + kq - rq = kq + r ---- 前r个(每个q+1个) 后k-r(每个q个)
*/

function splitListToParts(head, k) {
  let [fast, l] = [head, 0]
  while (fast && fast.next) {
    fast = fast.next.next
    l += 2
  }
  if (fast) l++
  const [q, r, list] = [Math.floor(l / k), l % k, Array(k).fill(null)]
  let [cur, prev] = [head, head]
  for (let i = 0; i < k && cur; i++) {
    list[i] = cur
    const num = i < r ? q + 1 : q
    for (let j = 0; j < num; j++) {
      prev = cur
      cur = cur.next
    }
    prev.next = null
  }
  return list
}
