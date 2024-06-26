let nums = [3, 2, 2, 3]
let val = 3

// 總結
// 解法一 是最簡單和直接的，適合大多數情況。
// 解法二 在標記被移除元素上更直觀，但標記操作並不必要。
// 解法三 在一些情況下可以提高效率，但代碼較複雜，需要仔細處理。
// 最終選擇哪個解法應該根據具體情況來決定，如果數組中 val 的比例較高，解法三可能更優；如果追求簡單和可讀性，解法一是最好的選擇。

// 2024/06/26 chatGPT
// 解法一
// 優點：
// 1. 簡單易懂，代碼可讀性高。
// 2. 原地修改數組，不需要額外的空間。
// 缺點：
// 1. 每次遇到等於 val 的元素時，只是跳過，對於大部分是 val 的數組，效率可能不高。
var removeElement = function (nums, val) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}

// 2024/06/26
// 解法二(我寫的)
// 優點：
// 1. 清楚地標記出被移除的元素，便於調試和觀察。
// 2. 對於原數組進行原地修改，不需要額外空間。
// 缺點：
// 1. 標記為 '_' 並不必要，增加了不必要的操作。
// 2. 代碼稍微比解法一復雜，尤其是對於初學者來說。
function removeElement(nums, val) {
    let index = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = '_'
        } else {
            nums[index] = nums[i]
            index++
        }
    }

    return index
}

// old
// 解法三
// 優點：
// 1. 只需要遍歷一次數組，理論上在一些情況下效率可能更高。
// 2. 遇到 val 時，通過交換來避免過多的寫操作。
// 缺點：
// 1. 交換元素並標記 '_' 增加了代碼的複雜度。
// 2. 需要小心處理 i--，否則容易出錯。
// 3. 在最壞情況下（例如所有元素都不等於 val），效率可能和解法一類似。
var removeElement = function (nums, val) {
    let lastIndex = nums.length - 1
    for (let i = 0; i <= lastIndex; i++) {
        if (nums[i] === val) {
            nums[i] = nums[lastIndex]
            nums[lastIndex] = '_'
            lastIndex--
            i--
        }
    }
    return lastIndex + 1
}

let newLength = removeElement(nums, val)
console.log(newLength)
console.log(nums)
console.log(nums.slice(0, newLength))
