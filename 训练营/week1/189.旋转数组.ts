/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (45.79%)
 * Likes:    934
 * Dislikes: 0
 * Total Accepted:    243.8K
 * Total Submissions: 531.7K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -2^31 
 * 0 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function reserve (nums: number[], start: number, end: number): void {
  while(start < end) {
    const temp = nums[end]
    nums[end] = nums[start]
    nums[start] = temp
    start ++
    end -- 
  }
}
function rotate(nums: number[], k: number): void {
  k = k % nums.length
  reserve(nums, 0, nums.length - 1)
  reserve(nums, 0, k - 1)
  reserve(nums, k, nums.length - 1)
};

// 50%

/*
1. 原生api array.splice 处理
nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k))
2. 三次数组翻转
function reserve (nums: number[], start: number, end: number): void {
  while(start < end) {
    const temp = nums[end]
    nums[end] = nums[start]
    nums[start] = temp
    start ++
    end -- 
  }
}
function rotate(nums: number[], k: number): void {
  k = k % nums.length
  reserve(nums, 0, nums.length - 1)
  reserve(nums, 0, k - 1)
  reserve(nums, k, nums.length - 1)
};
*/
// @lc code=end

