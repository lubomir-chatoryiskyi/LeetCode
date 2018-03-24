/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Complexity O(n2)
TODO: Think about hash tables approach O(n2)
*/
let twoSum = function(nums, target) {
    let result = [];
    nums.forEach((el, index) => {
        let i = 0;
        while (i <= nums.length - 1) {
            if (i !== index && el + nums[i] === target) {
                result.push(index)
            }
            i++;
        }
    });
    return result;
};

