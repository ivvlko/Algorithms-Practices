function bubbleSort(arr){
    let hasSwapped = true;

    while (hasSwapped){
        hasSwapped = false;
        for (let i=0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                hasSwapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2, -5, 5, 3, 2, 9, 6, 0, -1, 8]))