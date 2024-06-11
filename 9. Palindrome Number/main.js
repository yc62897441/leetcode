// 2024/06/10
var isPalindrome = function (x) {
    if (x < 0) return false
    if (x === 0) return true

    const s = x.toString()
    let checkResult = true
    for (let i = 0; i < Math.floor(s.length) / 2 + 1; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            checkResult = false
            return checkResult
        }
    }
    return checkResult
}

// old
var isPalindrome = function (x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false
    }
    let original_x = x
    let y = 0
    while (x > 0) {
        y = y * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    if (original_x === y) {
        return true
    } else {
        return false
    }
}
