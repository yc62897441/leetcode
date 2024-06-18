// 2024/06/18 chatGPT 可以使用一個棧（stack）來實現。
function isValid(s) {
    // 用於存放開括號的棧
    const stack = []
    // 建立括號對應的哈希表
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    // 遍歷輸入的字符串
    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        // 如果是開括號，則壓入棧中
        if (map[char]) {
            stack.push(char)
        } else {
            // 如果是閉括號，則檢查棧頂元素
            const top = stack.pop()
            if (map[top] !== char) {
                return false
            }
        }
    }

    // 最後檢查棧是否為空
    return stack.length === 0
}

// 2024/06/18
var isValid = function (s) {
    const table = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    const arr = []

    for (let i = 0; i < s.length; i++) {
        const notion = s[i]

        if (table[notion]) {
            arr.push(table[notion])
        } else {
            if (notion === arr[arr.length - 1]) {
                arr.pop()
            } else {
                return false
            }
        }
    }

    if (arr.length === 0) return true
    return false
}

// old
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }

    const table = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const leftParts = '({['
    let tempLeftPart = ''

    for (let i = 0; i < s.length; i++) {
        if (leftParts.includes(s[i])) {
            tempLeftPart = tempLeftPart + s[i]
        } else {
            if (tempLeftPart[tempLeftPart.length - 1] !== table[s[i]]) {
                return false
            } else {
                tempLeftPart = tempLeftPart.slice(0, tempLeftPart.length - 1)
            }
        }
    }

    if (tempLeftPart.length !== 0) {
        return false
    }
    return true
}
