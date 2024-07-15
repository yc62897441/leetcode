// 優劣勢
// 第一種方法：
// 優勢：
// 簡潔清晰，容易理解。
// 直接處理所有9的情況，只有在所有位數都是9的情況下才在數組開頭添加1。
// 操作較少，效能略高。

// 劣勢：
// 直接返回的操作使得流程結束較早，對於複雜情況的可讀性稍差。

// 第二種方法：
// 優勢：
// 明確處理每一位數的加法和進位過程。
// 在每次迴圈中處理需要在數組開頭添加1的情況，邏輯更為清晰。

// 劣勢：
// 較為冗長，增加了迴圈內的條件判斷。
// 每次進位時都會檢查並可能修改數組結構，效率稍低。

// 總結
// 第一種方法在處理普通情況時效率更高，代碼簡潔，適合大部分情況。
// 第二種方法更為明確地處理進位和邊界情況，邏輯清晰，但效率略低，適合需要明確步驟的場景。

// 2024/07/15 chatGTP 第一種方法
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // 如果當前位數不是9，直接加一並返回結果
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        // 如果當前位數是9，將其變為0
        digits[i] = 0
    }
    // 如果所有位數都是9，則在數組開頭添加1
    digits.unshift(1)
    return digits
}

// 2024/07/15 我寫的 第二種方法
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 < 10) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            digits[i] = 0
            if (i === 0) digits.unshift(1)
        }
    }
    return digits
}
// 當字串太長時不能使用 Number(num)，超出 JS 數字上限
// var plusOne = function (digits) {
//     let num = ''
//     digits.forEach((element) => {
//         num += element.toString()
//     })
//     let newNum = Number(num) + 1
//     newNum = newNum.toString()
//     let newDigits = []
//     for (let i = 0; i < newNum.length; i++) {
//         newDigits.push(newNum[i])
//     }
//     return newDigits
// }

// old
// var plusOne = function (digits) {
//     let carry = 0
//     digits[digits.length - 1] = digits[digits.length - 1] + 1

//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] + carry < 10) {
//             digits[i] = digits[i] + carry
//             return digits
//         } else {
//             digits[i] = (digits[i] + carry) % 10
//             carry = 1
//         }
//     }

//     digits.unshift(1)
//     return digits
// }
