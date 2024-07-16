// 比較
// 相似點
// 基本思路：兩種方法都通過逐位相加來處理二進制字符串的加法，並處理進位問題。
// 結果構建：都通過字符串拼接的方式構建最終的結果。

// 差異點
// 進位處理：
// 第一種方法：通過 sum 的累加和取模來處理進位，邏輯上較為簡潔。
// 第二種方法：通過多個 if-else 分支來處理進位，邏輯較為清晰，但代碼稍顯冗長。

// 處理未對齊位數：
// 第一種方法：在主循環中同時處理兩個字符串的位數，當某個字符串處理完後，會自然跳過其未定義的部分。
// 第二種方法：將兩個字符串處理完的部分放在兩個獨立的 while 循環中來單獨處理，代碼更加冗長，但處理邏輯上更加明確。

// 變量名稱與循環條件：
// 第一種方法：使用 i 和 j 作為索引變量，並且在 while 條件中使用 >= 0 判斷。
// 第二種方法：使用 aIndex 和 bIndex 作為索引變量，在 while 條件中使用 >-1 判斷，並且分別處理兩個字符串剩餘的位數。

// 總結
// 第一種方法：代碼較為簡潔，適合直接處理二進制字符串的加法。進位和位數處理集中在一個循環中。
// 第二種方法：代碼較為冗長，但處理邏輯較為清晰，對於每一位的進位情況處理較為具體，並且更明確地處理了兩個字符串位數不對齊的情況。

// 2024/07/16 chatGTP 第一種方法
function addBinary(a, b) {
    let result = '' // 存儲結果
    let carry = 0 // 進位
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) {
            sum += a[i] - '0' // 將字符轉換為數字
            i--
        }
        if (j >= 0) {
            sum += b[j] - '0' // 將字符轉換為數字
            j--
        }
        carry = Math.floor(sum / 2) // 計算進位
        result = (sum % 2) + result // 計算當前位並加到結果前面
    }

    if (carry > 0) {
        result = carry + result // 如果還有進位，添加到結果前面
    }

    return result
}

// 2024/07/16 我寫的 第二種方法
var addBinary = function (a, b) {
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let next = 0
    let result = ''

    while (aIndex > -1 && bIndex > -1) {
        const current = Number(a[aIndex]) + Number(b[bIndex]) + next
        if (current === 3) {
            next = 1
            result = '1' + result
        } else if (current === 2) {
            next = 1
            result = '0' + result
        } else if (current === 1) {
            next = 0
            result = '1' + result
        } else {
            next = 0
            result = '0' + result
        }

        aIndex--
        bIndex--
    }

    while (aIndex > -1) {
        const current = Number(a[aIndex]) + next
        if (current === 2) {
            next = 1
            result = '0' + result
        } else if (current === 1) {
            next = 0
            result = '1' + result
        } else {
            next = 0
            result = '0' + result
        }

        aIndex--
    }

    while (bIndex > -1) {
        const current = Number(b[bIndex]) + next
        if (current === 2) {
            next = 1
            result = '0' + result
        } else if (current === 1) {
            next = 0
            result = '1' + result
        } else {
            next = 0
            result = '0' + result
        }

        bIndex--
    }

    if (next === 1) result = '1' + result

    return result
}

// old
// var addBinary = function (a, b) {
//     const arrA = a.split('').reverse()
//     const arrB = b.split('').reverse()
//     let idx = 0
//     let carry = 0
//     let answer = []
//     let len = arrA.length > arrB.length ? arrA.length : arrB.length

//     while (idx < len) {
//         const x = arrA[idx] ? arrA[idx] : 0
//         const y = arrB[idx] ? arrB[idx] : 0
//         const sum = Number(x) + Number(y) + carry
//         carry = Math.floor(sum / 2)
//         answer.unshift(sum % 2)
//         idx = idx + 1
//     }

//     if (carry > 0) {
//         answer.unshift(carry)
//     }

//     return answer.join('')
// }
