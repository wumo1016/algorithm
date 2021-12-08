/* 最长回文子串(https://leetcode-cn.com/problems/longest-palindromic-substring/description/)
- 给你一个字符串 s，找到s中最长的回文子串
- s 仅由数字和英文字母（大写和/或小写）组成
*/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let [len, res] = [s.length, '']
  for (let i = 0; i < len; i++) {
    if (len - i > res.length) {
      for (let j = len; j >= i; j--) {
        if (isPalindrome(s.slice(i, j)) && j - i > res.length) {
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
)
