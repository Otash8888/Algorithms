// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  let baseLength = n+(n-1)

  for(let i = 1; i <= n; i++) {
    let formula = n-i
    let emptySpacesEachSide = (baseLength - (i+(i-1)))/2
    console.log(' '.repeat(emptySpacesEachSide) + '#'.repeat(i+(i-1)) + ' '.repeat(emptySpacesEachSide))
  }
}
