function mergeSortedArrays(arr1, arr2){
    
    let res = [];
    while (arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            res.push(arr1.shift())
        }else{
            res.push(arr2.shift())
        }
    }
    return res.concat(arr1).concat(arr2);
}

function mergeSort(arr){
    
        let mid = Math.floor(arr.length / 2);
        let h1 = arr.slice(0, mid);
        let h2 = arr.slice(mid, arr.length);

        if (h1.length <= 1 && h2.length <= 1){
            return mergeSortedArrays(h1, h2);
        }

        return mergeSortedArrays(mergeSort(h1), mergeSort(h2))    
    
}

let a = [1, 8, 4, 42, -100, 55555, 111, -4, 3, 4, 19, 666, 555, 2056, 1042];

console.log(mergeSort(a));