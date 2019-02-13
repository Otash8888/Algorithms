
function pyramid(n) {
  let baseLength = n+(n-1)

  for(let i = 1; i <= n; i++) {
    let formula = n-i
    let emptySpacesEachSide = (baseLength - (i+(i-1)))/2
    console.log(' '.repeat(emptySpacesEachSide) + '#'.repeat(i+(i-1)) + ' '.repeat(emptySpacesEachSide))
  }
}
