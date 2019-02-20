
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

// with a bad time complexity
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
