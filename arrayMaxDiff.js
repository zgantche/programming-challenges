console.log("checking max difference in array...\n");


function maxDiff(arr){
    let result = {
        maxIndexDiff: 0,
        i: undefined,
        j: undefined,
    }
    let indexDiff = undefined;
    let i = 0;
    let j = 0;


    for (i = 0; i<arr.length; i++){
        for (j = i-1; j>=0; j--){
            // console.log("i=" + i + " j=" +j);

            indexDiff = i - j;

            // console.log(arr[j] + " > " + arr[i]);
            // console.log(indexDiff + " vs " + maxIndexDiff + "\n");
            if (arr[j] < arr[i] && indexDiff > result.maxIndexDiff){
                result.maxIndexDiff = indexDiff;
                result.i = i;
                result.j = j;
            }
        }
    }

    if (result.i === undefined && result.j === undefined)
        console.log("Max Diff: -1");
    else
        console.log("Max Diff: " + result.maxIndexDiff + " (i=" + result.i + ", j=" + result.j + ")");

    return 0;
}

maxDiff([34, 8, 10, 3, 2, 80, 30, 33, 1]);
maxDiff([9, 2, 3, 4, 5, 6, 7, 8, 18, 0]);
maxDiff([1, 2, 3, 4, 5, 6]);
maxDiff([6, 5, 4, 3, 2, 1]);
maxDiff([9, 4, 2, 10, 7, 6, 1]);


// Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
// Output: 6  (j = 7, i = 1)

// Input: {9, 2, 3, 4, 5, 6, 7, 8, 18, 0}
// Output: 8 ( j = 8, i = 0)

// Input:  {1, 2, 3, 4, 5, 6}
// Output: 5  (j = 5, i = 0)

// Input:  {6, 5, 4, 3, 2, 1}
// Output: -1