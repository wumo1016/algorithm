const data = [
  ['我', '永', '喜', '国'],
  ['远', '欢', '汉', '辣'],
  ['中', '堡', '鸡', '口'],
  ['香', '腿', '味', '的']
]

function parsing(list) {
  if (list.length < 1) return ''
  let [mMax, nMax, stack, set, res] = [
    list.length - 1,
    list[0].length - 1,
    [[0, 0]],
    new Set(),
    ''
  ]
  const isExist = (m, n) => set.has(`${m}_${n}`) || (set.add(`${m}_${n}`) && false)
  while (stack.length) {
    const [m, n] = stack.pop()
    res += list[m][n]
    if (n < nMax && !isExist(m, n + 1)) stack.unshift([m, n + 1])
    if (m < mMax && !isExist(m + 1, n)) stack.unshift([m + 1, n])
  }
  return res
}

console.log(test(data))
