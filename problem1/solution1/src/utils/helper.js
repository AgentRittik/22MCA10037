
function Merge(left, right) {
    let sortedArr = [] 
    while (left.length && right.length) {
        if (left[0] < right[0]) {
        sortedArr.push(left.shift())
        } else {
        sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]

}



function MergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = MergeSort(arr.slice(0, mid))
    let right = MergeSort(arr.slice(mid))
    return Merge(left, right);
}

module.exports = {
    Merge, 
    MergeSort
}

