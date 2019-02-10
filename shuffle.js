//write a function which will accept an array as an argument and each time returns a different shuffled array.


const arr = [1,2,3,4,5,6,7,8]

let shuffle = (array) =>{
  let originalArray = [...array];
  let newArr = [];

  for (let i=0; i < array.length; i++){
    let randomNumber =  Math.floor(Math.random() * originalArray.length )
    newArr.push(originalArray[randomNumber])
    originalArray.splice(randomNumber, 1)
}
  console.log(newArr)
  return newArr
}

shuffle(arr)
