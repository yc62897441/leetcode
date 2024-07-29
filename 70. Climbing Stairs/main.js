// 2024/07/23 chatGTP 第一種方法
// 爬樓梯問題可以用遞歸的方法來解釋：
// 假設有 n 階樓梯，要到達第 n 階，可以有以下兩種方式：
// 從第 n-1 階爬一階上來。
// 從第 n-2 階爬兩階上來。
// 因此，到達第 n 階的總方法數應該是到達第 n-1 階的方法數加上到達第 n-2 階的方法數。這也就是為什麼總方法數等於前一階的方法數加上前兩階的方法數。
var climbStairs = function (n) {
    // 如果樓梯的階數小於等於2，直接返回n
    if (n <= 2) return n

    // 初始化變數，代表前一階和前兩階的方式數
    let oneStepBefore = 2 // 爬到第2階的方法數
    let twoStepsBefore = 1 // 爬到第1階的方法數
    let allWays = 0 // 總方法數的變數

    // 從第3階開始迭代，直到第n階
    for (let i = 3; i <= n; i++) {
        // 總方法數等於前一階的方法數加上前兩階的方法數
        allWays = oneStepBefore + twoStepsBefore
        // 更新前兩階的方法數為前一階的方法數
        twoStepsBefore = oneStepBefore
        // 更新前一階的方法數為總方法數
        oneStepBefore = allWays
    }

    // 返回總方法數
    return allWays
}
// 2024/07/23 我寫的 第二種方法
var climbStairs = function (n) {
    let sum = 0
    let maxTwoSteps = Math.floor(n / 2)

    for (let twoNum = 0; twoNum <= maxTwoSteps; twoNum++) {
        const totalNum = n - 2 * twoNum + twoNum
        const combinations = calculateCombinations(totalNum, twoNum)
        sum = sum + combinations
    }
    return sum

    function calculateCombinations(totalNum, twoNum) {
        if (totalNum === twoNum || twoNum === 0) return 1

        let combinations = 1
        for (let i = 1; i <= twoNum; i++) {
            combinations = (combinations * (totalNum - i + 1)) / i
        }
        return combinations
    }
}

// old
// var climbStairs = function (n) {
//     let sum = 0
//     let most_two = Math.floor(n / 2)

//     for (let i = most_two; i >= 0; i--) {
//         let total_digits = i + (n - 2 * i)

//         let top = 1
//         let buttom = 1
//         for (let j = total_digits; j > total_digits - i; j--) {
//             top = top * j
//         }
//         for (let k = 1; k <= i; k++) {
//             buttom = buttom * k
//         }

//         sum = sum + top / buttom
//     }

//     return sum
// }
