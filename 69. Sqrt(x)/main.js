// 2024/07/18 chatGTP 第一種方法
function mySqrt(x) {
    if (x < 2) return x

    let left = 1,
        right = Math.floor(x / 2),
        result = 0

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        const square = mid * mid

        if (square === x) {
            return mid
        } else if (square < x) {
            left = mid + 1
            result = mid
        } else {
            right = mid - 1
        }
    }

    return result
}

// 2024/07/18 我寫的 第二種方法(經 chatGTP 改良)
var mySqrt = function (x) {
    let left = 0
    let right = x

    while (left <= right) {
        let center = Math.floor((left + right) / 2)

        if (center ** 2 > x) {
            right = center - 1
        } else if (center ** 2 < x) {
            left = center + 1
        } else {
            return center
        }
    }

    return right
}

// 2024/07/18 我寫的 第三種方法
var mySqrt = function (x) {
    if (x < 2) return x
    let left = 0
    let right = x

    while (left < right && right - left > 1) {
        let center = Math.floor((left + right) / 2)

        if (center ** 2 > x) {
            right = center
        } else if (center ** 2 < x) {
            left = center
        } else {
            return center
        }
    }

    return left
}

// old
var mySqrt = function (x) {
    if (x === 1) {
        return 1
    }

    let start = 0
    let end = x
    let answer = Math.floor((start + end) / 3)

    while (answer * answer > x || (answer + 1) * (answer + 1) <= x) {
        console.log(answer, answer * answer, (answer + 1) * (answer + 1))
        if (answer * answer > x) {
            end = answer
            answer = Math.floor((start + end) / 3)
        }
        if ((answer + 1) * (answer + 1) <= x) {
            start = answer
            answer = Math.floor((start + end) / 3)
        }
    }

    return answer
}
