console.log("constructing fibonacci sequence...");

let arr = [1];

/**
 * Generates the Nth number in the fibonacci sequence
 * @param {Integer} n - Required spot in fibonacci sequence.
 */
function getNthFibonacci(n){
    if (n < 2)
        return n;

    let currentNum = getNthFibonacci(n-1) + getNthFibonacci(n-2);
    //console.log(currentNum);
    arr[n-1] = currentNum;

    return currentNum;
}



console.log("Nth number is:", getNthFibonacci(10), " -- resulting sequence:", arr);
// console.log(getNthFibonacci(6));
// console.log(getNthFibonacci(7));
// console.log(getNthFibonacci(8));