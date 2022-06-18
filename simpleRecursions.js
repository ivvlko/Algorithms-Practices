
function power(b, exp){
    if (exp === 0){
        return 1;
    }
    return b * power(b, exp -1);
    
}

power(3,3) // 16

function factorial(n){
   if (n === 0){
       return 1;
   };
   return n * factorial(n-1);
}

factorial(5);

function productOfArray(arr){
   if (arr.length === 0){ return 1 };

   return arr.shift() * productOfArray(arr)
}

productOfArray([1, 2, 3, 4]);

function recursiveRange(n){
   if (n === 0){ return 0 };
   return n + recursiveRange(n-1);
}

recursiveRange(4);


function fib(n){
    arr = [1, 1]
    function rec(n){
        if (arr.length === n){ return arr[n-1]}
        let currNum = arr[arr.length -1] + arr[arr.length -2];
        arr.push(currNum);
        return rec(n)
    }
    return rec(n);
}


fib(7)

function fib2(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(6), fib2(6))