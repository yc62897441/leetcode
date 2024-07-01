// 2024/07/01 chatGPT 1
var strStr = function (haystack, needle) {
    if (needle === '') return 0

    const haystackLength = haystack.length
    const needleLength = needle.length

    // 遍歷 haystack，從每個可能的起始位置開始匹配
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j = 0

        // 檢查 haystack 中的子字符串是否與 needle 匹配
        while (j < needleLength && haystack[i + j] === needle[j]) {
            j++
        }

        // 如果完整匹配，返回起始索引
        if (j === needleLength) return i
    }

    // 如果未找到匹配，返回 -1
    return -1
}
// 2024/07/01 chatGPT 2
var strStr = function (haystack, needle) {
    if (needle === '') return 0
    return haystack.indexOf(needle)
}

// 2024/07/01
// (我寫的)
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) return -1

    let index = -1

    for (let i = 0; i < haystack.length; i++) {
        let check = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) check = false
        }

        if (check) {
            index = i
            return index
        }
    }

    return index
}

console.log(strStr('sadbutsad', 'sad'))
