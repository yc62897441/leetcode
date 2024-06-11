// 2024/06/10
var twoSum = function (nums, target) {
    const table = {}
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]

        if (table[target - item] !== undefined) {
            return [table[target - item], i]
        }
        table[item] = i
    }
}

// old
var twoSum = function (nums, target) {
    const table = {}
    for (let i = 0; i < nums.length; i++) {
        if (table[target - nums[i]] !== undefined) {
            return [table[target - nums[i]], i]
        }
        table[nums[i]] = i
    }
}
