/* Fizz Buzz(https://leetcode-cn.com/problems/fizz-buzz/)
- 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
- 如果 i 同时是 3 和 5 的倍数 answer[i] == "FizzBuzz" 
- 如果 i 是 3 的倍数 answer[i] == "Fizz"
- 如果 i 是 5 的倍数 answer[i] == "Buzz"
- 如果上述条件全不满足 answer[i] == i （以字符串形式）
*/

/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    let [is3, is5, val] = [i % 3 === 0, i % 5 === 0, `${i}`]
    if (is3 && is5) {
      val = 'FizzBuzz'
    } else if (is3) {
      val = 'Fizz'
    } else if (is5) {
      val = 'Buzz'
    }
    res.push(val)
  }
  return res
}

console.log(fizzBuzz(3)) // ["1","2","Fizz"]
console.log(fizzBuzz(5)) // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// 简化版
function fizzBuzz(n) {
  return Array.from({ length: n }, (t, i) =>
    (t = (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')) ? t : `${i}`
  )
}
