/* 最长回文子串(https://leetcode-cn.com/problems/longest-palindromic-substring/description/)
- 给你一个字符串 s，找到s中最长的回文子串
- s 仅由数字和英文字母（大写和/或小写）组成
*/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome1(s) {
  let [len, res] = [s.length, '']
  for (let i = 0; i < len; i++) {
    if (len - i > res.length) {
      for (let j = len; j >= i; j--) {
        if (j - i > res.length && isPalindrome(s.slice(i, j))) {
          res = s.slice(i, j)
          break
        }
      }
    } else {
      break
    }
  }
  return res
}

function isPalindrome(s) {
  if (s.length < 2) return true
  let [start, end] = [0, s.length - 1]
  while (end - start > 0) {
    if (s[start] !== s[end]) return false
    start++
    end--
  }
  return true
}

console.log(longestPalindrome('bddbaa')) // bb
console.log(longestPalindrome('a')) // a
console.log(longestPalindrome('ac')) // a
console.log(
  longestPalindrome(
    'cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj'
  )
) // xrcrx

// 中心扩散法
function longestPalindrome(s) {
  if (s.length < 2) return s
  let res = ''
  for (let i = 0; i < s.length; i++) {
    helper(i, i) // 回文子串长度是奇数
    helper(i, i + 1) // 回文子串长度是偶数
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    if (n - m - 1 > res.length) res = s.slice(m + 1, n)
  }
  return res
}
