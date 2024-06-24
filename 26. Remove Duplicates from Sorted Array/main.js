// 2024/06/24 chatGPT
// 主要差異
// 1.算法思想：
// 解法一：利用排序數組的特性，直接比較相鄰元素。如果相鄰元素不同，則認為遇到新的唯一元素，並將其移動到結果數組中。
// 解法二：使用哈希表（table）來記錄每個元素是否出現過，從而確定唯一元素。對於每個未出現過的元素，將其放置到結果數組中。

// 2.空間複雜度：
// 解法一：空間複雜度是 O(1)，因為僅使用了常數空間來存儲變量（不包括輸入數組）。
// 解法二：空間複雜度是 O(n)，其中 n 是數組長度，因為使用了哈希表來存儲出現過的元素。

// 3.時間複雜度：
// 解法一：時間複雜度是 O(n)，因為需要遍歷一次數組。
// 解法二：時間複雜度也是 O(n)，因為需要遍歷一次數組，但每次查詢和插入哈希表的操作在平均情況下是 O(1)。

// 4.輸入數組的假設：
// 解法一：依賴於輸入數組已經排序的特性，因此能夠直接比較相鄰元素。
// 解法二：不依賴於數組的排序，可以處理未排序的數組，使用哈希表來追蹤唯一元素。

// 結論
// 如果確保數組是已排序的，解法一是更好的選擇，因為它的空間複雜度更低，僅使用了常數額外空間。
// 如果數組可能是未排序的，解法二能夠處理這種情況，但代價是需要更多的額外空間來存儲哈希表。
// 在解題要求中提到數組已經排序的情況下，應優先選擇解法一，因為它更加高效並且符合題目對空間複雜度的要求。
// 解法一
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0

    let index = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i]
            index++
        }
    }

    return index
}

// 2024/06/24
// 解法二(我寫的)
function removeDuplicates(nums) {
    const table = {}
    let uniqueNum = 0

    nums.forEach((item, index) => {
        if (!table[item]) {
            table[item] = true
            nums[uniqueNum] = nums[index]
            uniqueNum++
        }
    })

    return uniqueNum
}

// old
// var removeDuplicates = function(nums) {
//     let index = 0
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[index] < nums[i]) {
//         nums[index + 1] = nums[i]
//         index++
//       }
//     }
//     index++
//     return index
//   };
