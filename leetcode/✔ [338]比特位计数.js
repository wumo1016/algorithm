/* 比特位计数(https://leetcode-cn.com/problems/counting-bits/)
- 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 
- 返回一个长度为 n + 1 的数组 ans 作为答案。
- 0 <= n <= 105
*/

/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const res = []
  const loop = (count, num) => {
    if (count === 0) return num
    if (count % 2 === 1) num++
    return loop((count / 2) >> 0, num)
  }
  for (let i = 0; i <= n; i++) {
    res.push(loop(i, 0))
  }
  return res
}
console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]

// 转换
function countBits(n) {
  const res = []
  for (let i = 0; i <= n; i++) {
    res.push(Number(i).toString(2).replaceAll('0', '').length)
  }
  return res
}

// 位移 每个数1的数量等它向右移动一位数的数的1的数量 + 它自身个位上1的数量
function countBits(n) {
  const res = Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) {
    res[i] = res[i >> 1] + (i % 2)
  }
  return res
}

/* 
奇数个位数肯定是1 偶数个位数肯定是0  
0  0000 0
1  0001 1
2  0010 1
3  0011 2
4  0100 1
5  0101 2
6  0110 2
7  0111 3
8  1000 1
9  1001 2
10 1010 2
*/
