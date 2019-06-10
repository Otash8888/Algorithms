
// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.
// For example, if , it is a valid string because frequencies are . So is  because we can remove one  and have  of each character in the remaining string. If  however, the string is not valid as we can only remove  occurrence of . That would leave character frequencies of .

// Function Description

// Complete the isValid function in the editor below. It should return either the string YES or the string NO.

// isValid has the following parameter(s):

// Input Format

//A single string s.

// Sample Input 
//aabbcd

// Sample Output 
// NO

// Sample Input 
//abcdefghhgfedecba

// Sample Output 
// YES

// Complete the isValid function below.
function isValid(s) {
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1
        } else if (obj[s[i]]) {
            obj[s[i]] += 1
        }
    }

    let arrOfValues = Object.values(obj)
    let x = arrOfValues[0]
    let y = 1
    let response = ''
    let newArr = []

    for (let i = 0; i < arrOfValues.length; i++) {
        if (arrOfValues[i] === x + 1 || arrOfValues[i] === y) {
            newArr.push(arrOfValues[i])
            x = -1
            y = 0
        } else if (arrOfValues[i] === arrOfValues[0]) {
            newArr.push(arrOfValues[i])
        }
    }

    if (arrOfValues.length === newArr.length) {
        response = 'YES'
    } else {
        response = 'NO'
    }

    return response
}
