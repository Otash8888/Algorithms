
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
//The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 9 + 5 + 3 = 17. Their absolute difference is |15 - 17| = 2.

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let x = 0;
    let y = 0;
    let j = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        y += arr[i][j]
        x += arr[i][i]
        j -= 1
    }
    return Math.abs(x-y)
}
