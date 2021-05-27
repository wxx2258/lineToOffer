/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2的幂
 *
 * https://leetcode-cn.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (49.26%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    112.7K
 * Total Submissions: 228.8K
 * Testcase Example:  '1'
 *
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: true
 * 解释: 2^0 = 1
 * 
 * 示例 2:
 * 
 * 输入: 16
 * 输出: true
 * 解释: 2^4 = 16
 * 
 * 示例 3:
 * 
 * 输入: 218
 * 输出: false
 * 
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
};

// 50

/*
1. n > 0 && (n & (-n)) == n
2. n > 0 && (n & (n - 1)) === 0
*/
// @lc code=end

