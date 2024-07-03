// 2024/07/03 chatGPT(二分查找) 時間複雜度為 O(log n)。
function searchInsert(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left
}

// 2024/07/03(線性掃描)
var searchInsert = function (nums, target) {
    let index = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i
            return index
        } else if (nums[i] < target) {
            index = i
        } else {
            index = i
            return index
        }
    }

    return index + 1
}

// old
// var searchInsert = function (nums, target) {
//     let startIndex = 0
//     let endIndex = nums.length - 1
//     if (nums[endIndex] < target) {
//         return endIndex + 1
//     }
//     if (nums[startIndex] > target) {
//         return startIndex
//     }

//     while (startIndex !== endIndex) {
//         let middleIndex = Math.floor((startIndex + endIndex) / 2)
//         if (nums[middleIndex] === target) {
//             return middleIndex
//         }
//         if (nums[middleIndex] > target) {
//             endIndex = middleIndex
//         }
//         if (nums[middleIndex] < target) {
//             startIndex = middleIndex + 1
//         }
//     }
//     return startIndex
// }
