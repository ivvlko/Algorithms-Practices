
function binarySearch(arr, val){
    let leftPointer = 0;
    let rightPointer = arr.length ;
    let midPoint = Math.ceil((rightPointer + leftPointer) / 2);

    while (arr[midPoint] !== val && rightPointer > leftPointer){
        if (arr[midPoint] > val){
            rightPointer = midPoint - 1;
        } else{
            leftPointer = midPoint + 1;
        }
        midPoint = Math.ceil((rightPointer + leftPointer) / 2);
        
    }
    if (arr[midPoint] === val){ return midPoint };


    return -1;

}
console.log(binarySearch([1, 2, 3, 4, 5, 44, 88, 99], 33));
