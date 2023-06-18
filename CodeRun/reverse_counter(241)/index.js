
function createCountdown(num) {
    return function () {
        if (num < 0 || !Number.isInteger(num)) return 0
        while (num >= 0) {
            let number = num
            num--
            return number
        }
    }
}

const func2 = createCountdown(2)
console.log(func2())
console.log(func2())
console.log(func2())
console.log(func2())