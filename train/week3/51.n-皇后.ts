/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.85%)
 * Likes:    835
 * Dislikes: 0
 * Total Accepted:    117.2K
 * Total Submissions: 158.7K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 
 * 
 * 
 * 
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  if (n < 1) return []
  const result: number[][] = []
  let cols = new Set(),
      pie = new Set(),
      na = new Set()
  DFS(n, 0, [])
  return _generate_result(n)

  function DFS(n, row, cur_state) {
    if (row >= n) {
      result.push([...cur_state])
      return
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row - col) || na.has(row + col)) continue
      cols.add(col)
      pie.add(row - col)
      na.add(row + col)
      
      cur_state.push(col)
      DFS(n, row + 1, cur_state)
      cur_state.pop()

      cols.delete(col)
      pie.delete(row - col)
      na.delete(row + col)
    }
  }
  function _generate_result(n) {
    const board = []
    for (const res of result) {
      let resTemp = []
      for (const i of res) {
        let temp = new Array(n)
        temp.fill('.', 0, i)
        temp.fill('Q', i, i + 1)
        temp.fill('.', i + 1, n)
        resTemp.push(temp.join(''))
      }
      board.push(resTemp)
    }
    return board
  }
};
// @lc code=end

