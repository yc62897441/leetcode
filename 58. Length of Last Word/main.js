// 2024/07/07 chatGTP
function lengthOfLastWord(s) {
    // 去除字串前後的空白字符
    s = s.trim()

    // 將字串用空白字符分割成單詞陣列
    const words = s.split(' ')

    // 返回最後一個單詞的長度
    return words[words.length - 1].length
}

// 2024/07/07 chatGTP 不使用 trim() 和 split() 方法
function lengthOfLastWord(s) {
    let length = 0
    let inWord = false

    // 從字串尾部開始遍歷
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            // 當前字符不是空白字符
            length++
            inWord = true
        } else if (inWord) {
            // 當前字符是空白字符，且之前已經進入單詞
            break
        }
    }

    return length
}

// 2024/07/07
var lengthOfLastWord = function (s) {
    let preLen = 0
    let currentLen = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            currentLen++
        } else {
            if (currentLen) preLen = currentLen
            currentLen = 0
        }
    }
    if (currentLen) return currentLen
    return preLen
}

// old
// var lengthOfLastWord = function (s) {
//     let a = s.trim()
//     let count = 0
//     for (let i = a.length - 1; i >= 0; i--) {
//         if (a[i] !== ' ') {
//             count++
//         } else {
//             return count
//         }
//     }
//     return count
// }
