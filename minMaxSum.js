// Problem:
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr = [1,3,5,7,9]. Our minimum sum is 16 and our maximum sum is 24. 
//We would print
//16 24

//Function Description
// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

//Solution

function miniMaxSum(arr) {
    let sArr = arr.sort()
    let minTotal = 0
    let maxTotal = 0
    let j = sArr.length - 1
    for (let i = 1; i < sArr.length; i++){
        j -= 1
        minTotal += sArr[j]
        maxTotal += sArr[i]

    }
    console.log(minTotal + ' ' + maxTotal)
}
