function yan(N, staff, K) {
    let counter = 0
    let res = 0

    staff.sort((a, b) => b - a)

    while (counter < K) {
        res += staff[counter]
        counter++;
    }

    return res
}

console.log(yan(7,  [10, 3, 21, 23, 6, 3, 8], 4))