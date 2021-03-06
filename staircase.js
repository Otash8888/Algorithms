
//Consider a staircase of size : n = 4
//    #
//   ##
//  ###
// ####

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer

// Input Format

// A single integer,n , denoting the size of the staircase.

// Output Format

// Print a staircase of size n using # symbols and spaces.

// Note: The last line must have 0 spaces in it.

// Sample Input

// 6 

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
    let h = '#'
    let s = ' '
    let t = n - 1
    for (let i = 0; i <= t; i++){
        console.log(s.repeat(t-i) + h.repeat(i+1))
    }

}
