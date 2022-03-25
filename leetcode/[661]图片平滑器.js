/* 图片平滑器(https://leetcode-cn.com/problems/image-smoother/)
- 给你一个表示图像灰度的 m x n 整数矩阵 img ，返回对图像的每个单元格平滑处理后的图像
- 1 <= m, n <= 200
- 0 <= img[i][j] <= 255
*/

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function imageSmoother(img) {
  const [m, n] = [img.length, img[0].length]
  const res = Array(m)
    .fill(0)
    .map(_ => Array(n).fill(0))
  const getValue = (i, j) => {
    let [total, num] = [0, 0]
    for (let x = i - 1; x <= i + 1; x++) {
      for (let y = j - 1; y <= j + 1; y++) {
        if (img[x] && img[x][y] !== undefined) {
          total += img[x][y]
          num++
        }
      }
    }
    return (total / num) >> 0
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = getValue(i, j)
    }
  }
  return res
}

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100]
  ])
) // [[137,141,137],[141,138,141],[137,141,137]]
