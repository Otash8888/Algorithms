
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// s: a string representing time in 12 hour format

// Constraints

// All input times are valid

// Sample Input 0

// 07:05:45PM

// Sample Output 0

// 19:05:45





function timeConversion(s) {
     s = s.split(':')
    if (parseInt(s[0]) === 12 && s[2][2] === 'A') {
        s[0] = '00'
    } else if (parseInt(s[0]) < 12 && s[2][2] === 'P') {
        s[0] = (parseInt(s[0]) + 12).toString()
    }
    s[2] = s[2].slice(0, 2)
    
    return s.join(':')

}
