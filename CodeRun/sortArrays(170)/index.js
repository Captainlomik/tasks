function merge(nums1, m, nums2, n) {
    let flag1 = nums1[0]
    let index1 = 0
    let flag2 = 0

    for (let i in nums2) {
        if (flag1 > nums2[i]) {
            nums1.splice(index1, 0, nums2[i])
            index1++
            flag1 = nums1[index1]
        }
        else {
            flag2 = nums2[i]
            while (flag1 < flag2 && flag1 !== 0) {
                index1++;
                flag1 = nums1[index1]
            }
            nums1.splice(index1, 0, nums2[i])
            index1++
            flag1 = nums1[index1]
        }
        if (nums1.length > m + n) {
            while (nums1.length !== m + n) {
                nums1.pop()
            }
        }
    }
    return nums1
}



console.log(merge([ 46,55,88,0,0,0,0], 3, [18, 29, 80, 90], 4))