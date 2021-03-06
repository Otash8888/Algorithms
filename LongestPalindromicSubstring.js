
/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

// with a bad time complexity 1
var findPalindrome = (s) => {
  let reversed = s.split('').reverse().join('')
  return reversed === s
}
 
var longestPalindrome = function(s) {
  let word = ''
  let arrayOfPalindromes = []
  let longestPalindromes = ''
  if (s.length <= 1) {
    return s
  }
  for(let i = 0; i < s.length; i++){
    word = s[i]
    for (let j = i+1; j < s.length; j++){
      word +=s[j]
      if (findPalindrome(word)){
        arrayOfPalindromes.push(word)
      }
      if(j === s.length - 1){
        word = ''
      }
    }
  }
    if(arrayOfPalindromes.length){
      arrayOfPalindromes.sort((a,b)=>b.length - a.length)
      longestPalindromes = arrayOfPalindromes[0]
    }
        
    if(!longestPalindromes){
      longestPalindromes = s[0]
    }
  return longestPalindromes
}

// with a bad time complexity 2

var longestPalindrome = function(s) {
  let longest = ''
    for(let i=0; i< s.length; i++) {
        for(let j=i; j<s.length; j++) {
          let currentString = s.slice(i, j+1)         
          if(currentString === currentString.split("").reverse().join("") && longest.length <= currentString.length) {
            longest = currentString
          }
        }
    }
  return longest
};

// good time complexity 3
function longestPalindrome(s) {
  var longest = '', c;
  for (c=0; c<s.length; c++) {
    if ((s.length-c)*2 <= longest.length) break;  // exit early if remaining can't surpass largest found

    longest = scanOutward(s, longest, c, c);   // odd length "ata"
    longest = scanOutward(s, longest, c+1, c); // even length "atta"
  }
  return longest;
};

function scanOutward(s, longest, left, right) {
  if (left > 0 && right < s.length && s[left-1] === s[right+1]) {
    return scanOutward(s, longest, left-1, right+1);
  } else {
    return (right-left+1 >= longest.length) ? s.substring(left, right+1) : longest;
  }
}
