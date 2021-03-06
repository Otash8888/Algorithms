// Problem:
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// Example
//For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

//Function Description
//Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights


//Sample input
//4
//3 2 1 3

//Sample Output
//2 



function birthdayCakeCandles(ar) {
    let maxHeight = 0
    let count = 0
    
    for (let i = 0; i < ar.length; i++){
        if (ar[i] > maxHeight) {
            maxHeight = ar[i]
        }
    }
    
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === maxHeight) {
            count += 1
        }
    }
    return count
}
