function pivot(arr){
    let pivotPoint = arr.length -1;
    let currentIndexToSwap = -1;

    for(let i = 0; i < pivotPoint; i++){
        if(arr[i] <= arr[pivotPoint]){
            currentIndexToSwap ++;
            [arr[currentIndexToSwap], arr[i]] = [arr[i], arr[currentIndexToSwap]];
        }
    }
    [arr[pivotPoint], arr[currentIndexToSwap + 1]] = [arr[currentIndexToSwap+1], arr[pivotPoint]];
    return currentIndexToSwap + 1;

}

function quickSort(arr){
    if (arr.length <= 1){ return arr }
    let pivotIndex = pivot(arr);
    let h1 = arr.slice(0, pivotIndex);
    let h2 = arr.slice(pivotIndex, arr.length);

    return quickSort(h1).concat(quickSort(h2));
    
}

let a = Array.from({length: 20}, () => Math.floor(Math.random() * 20));


console.log(quickSort(a));