/* 将标题首字母大写(https://leetcode.cn/problems/capitalize-the-title/)
- 给你一个字符串 title ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。请你按以下规则将每个单词的首字母 大写 ：
- 如果单词的长度为 1 或者 2 ，所有字母变成小写。
  - 否则，将单词首字母大写，剩余字母变成小写。
  - 请你返回 大写后 的 title 
*/

/**
 * @param {string} title
 * @return {string}
 */
function capitalizeTitle(title) {
  let [len, res, start] = [title.length, '', 0]
  for (let i = 0; i < len; i++) {
    if (title[i] === ' ' || i === len - 1) {
      let cur =
        i - start > 2 || (i === len - 1 && i - start > 1)
          ? title[start++].toUpperCase()
          : title[start++].toLowerCase()
      while (start <= i) {
        cur += title[start++].toLowerCase()
      }
      res += cur
      start = i + 1
    }
  }
  return res
}

console.log(capitalizeTitle('capiTalIze tHe titLe')) // "Capitalize The Title"
console.log(capitalizeTitle('First leTTeR of EACH Word')) // "First Letter of Each Word"
console.log(capitalizeTitle('i lOve leetcode')) // "i Love Leetcode"
console.log(capitalizeTitle('ZW Cl pyR uoC')) // "zw cl Pyr Uoc"

function capitalizeTitle(title) {
  return title
    .split(' ')
    .reduce(
      (res, cur) =>
        res +
        ' ' +
        (cur.length > 2
          ? cur[0].toUpperCase() + cur.slice(1).toLowerCase()
          : cur.toLowerCase()),
      ''
    )
    .slice(1)
}
