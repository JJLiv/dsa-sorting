function merge(arr1, arr2) {
    let out = [];
    let i;
    let j;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            out.push(arr1[i]);
            i++;
        } else {
            out.push(arr2[j])
            j++
        }        
    }
    while (i < arr1.length) {
        out.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        out.push(arr2[j]);
        j++;
    }
    return out;   


}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left,right);
}

module.exports = { merge, mergeSort};