// 2024/06/16 chatGPT
var longestCommonPrefix = (strs) => {
    if (strs.length === 0) return ''

    // 初始化 prefix 為第一個字符串
    let prefix = strs[0]

    // 從第二個字符串開始遍歷
    for (let i = 1; i < strs.length; i++) {
        let currentStr = strs[i]

        // 比較當前字符串與 prefix
        while (currentStr.indexOf(prefix) !== 0) {
            // 縮短 prefix
            prefix = prefix.slice(0, prefix.length - 1)
            // 如果縮短後的 prefix 為空，則沒有公共前綴
            if (prefix === '') return ''
        }
    }

    return prefix
}

// 2024/06/16
var longestCommonPrefix = function (strs) {
    let prefix = ''
    let letterIndex = 0
    let continueCheck = true

    while (continueCheck) {
        const letter = strs[0][letterIndex]

        for (let i = 0; i < strs.length; i++) {
            if (letter !== strs[i][letterIndex] || !letter) continueCheck = false // 結束條件，發現當前 letterIndex 已有不匹配的狀況
        }

        if (continueCheck) {
            prefix += letter
            letterIndex++
        }

        if (letterIndex >= strs[0].length) continueCheck = false // 結束條件，已經檢查完第一個字串的所有字元了
    }
    return prefix
}

// old
var longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].slice(0, prefix.length).includes(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix === '') {
                return prefix
            }
        }
    }
    return prefix
}
