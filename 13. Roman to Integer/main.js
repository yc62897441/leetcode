// 2024/06/11
var romanToInt = function (s) {
    let romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let total = 0
    let preValue = 0

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanNum[s[i]]
        if (currentValue < preValue) {
            total = total - currentValue
        } else {
            total = total + currentValue
        }
        preValue = currentValue
    }
    return total
}

// old
// var romanToInt = function (s) {
//     let romanNum = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     }
//     let answer = 0
//     let last_digit = 0
//     for (let i = 0; i < s.length; i++) {
//         answer = answer + romanNum[s[i]]
//         if (romanNum[s[i]] > last_digit) {
//             answer = answer - 2 * last_digit
//         }
//         last_digit = romanNum[s[i]]
//     }
//     return answer
// }
