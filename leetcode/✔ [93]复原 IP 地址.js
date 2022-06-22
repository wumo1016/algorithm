/* 复原 IP 地址(https://leetcode.cn/problems/restore-ip-addresses/)
- 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0）
- 整数之间用 '.' 分隔
- 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const [len, res] = [s.length, []]
  const dfs = (cur, num, j) => {
    if (num === 4 && j === len) return res.push(cur)
    if (j >= len) return
    if (num > 0) cur = cur + '.'
    dfs(cur + s[j], num + 1, j + 1)
    if (s[j] != 0) {
      if (j + 1 < len) dfs(cur + s[j] + s[j + 1], num + 1, j + 2)
      if (j + 2 < len) {
        const three = Number(s[j] + s[j + 1] + s[j + 2])
        if (three < 256) dfs(cur + three, num + 1, j + 3)
      }
    }
  }
  dfs('', 0, 0)
  return res
}

console.log(restoreIpAddresses('25525511135')) // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('0000')) // ["0.0.0.0"]
console.log(restoreIpAddresses('101023')) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
