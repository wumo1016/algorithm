/* 分隔链表(https://leetcode-cn.com/problems/split-linked-list-in-parts/description/)
- 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
- 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null
- 这 k 个部分应该按照在链表中出现的顺序排列
- 并且排在前面的部分的长度应该大于或等于排在后面的长度
- 返回一个由上述 k 部分组成的数组
- 0 <= Node.val <= 1000
- 1 <= k <= 50
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
function splitListToParts(head, k) {}

const data = {
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

console.log(JSON.stringify(splitListToParts(data, 3)))
