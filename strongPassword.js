// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+


//She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

// Input Format

// The first line contains an integer  denoting the length of the string.

// The second line contains a string consisting of  characters, the password typed by Louise. Each character is either a lowercase/uppercase English alphabet, a digit, or a special character.


// Output Format

// Print a single line containing a single integer denoting the answer to the problem.


// Sample Input 0

// 3
// Ab1
// Sample Output 0

// 3


// Explanation 0

// She can make the password strong by adding 3 characters, for example, $hk, turning the password into Ab1$hk which is strong.

// 2 characters aren't enough since the length must be at least 6.

// Sample Input 1

// 11
// #HackerRank
// Sample Output 1

// 1
// Explanation 1

// The password isn't strong, but she can make it strong by adding a single digit.


function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"

    let numbersObj = {}
    let lower_caseObj = {}
    let upper_caseObj = {}
    let special_charactersObj = {}

    let rtn = {
        number: false,
        lower_case: false,
        upper_case: false,
        special_character: false,
        rtnValue: 4

    }
    
     for (let i = 0; i < lower_case.length; i++) {
            if (i < numbers.length) {
                numbersObj[numbers[i]] = true
            }
            if (i < lower_case.length) {
                lower_caseObj[lower_case[i]] = true
            }
            if (i < upper_case.length) {
                upper_caseObj[upper_case[i]] = true
            }
            if (i < special_characters.length) {
                special_charactersObj[special_characters[i]] = true
            }
        }

    
        for (let i = 0; i < n; i++) {

            if (numbersObj[password[i]] && !rtn.number) {
                rtn.number = true
                rtn.rtnValue -= 1
            }
            if (lower_caseObj[password[i]] && !rtn.lower_case) {
                rtn.lower_case = true
                rtn.rtnValue = rtn.rtnValue - 1
            }
            if (upper_caseObj[password[i]] && !rtn.upper_case) {
                rtn.upper_case = true
                rtn.rtnValue -= 1
            }
            if (special_charactersObj[password[i]] && !rtn.special_character) {
                rtn.special_character = true
                rtn.rtnValue -= 1
            }



        }
       
        



       
    
}
