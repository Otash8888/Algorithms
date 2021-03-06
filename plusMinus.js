
//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
//This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 -4 are acceptable.

//Function Description

// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers
// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers 


// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.

// Sample Input

// 6
// -4 3 -9 0 4 1   


// Sample Output

// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
    let p = 0
    let n = 0
    let zero = 0
    let len = arr.length

    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            p++
        } else if (arr[i] < 0) {
            n++
        } else {
            zero++
        }
    }

    [(p / len).toFixed(6), (n / len).toFixed(6), (zero / len).toFixed(6)].forEach((val)         => {
        console.log(val)
    })

}

