// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is
//  higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible 
// results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

var guessNumber = function (n) {

    if (guess(n) === 0) return n
  
    let low = 1, high = n;
    while (n > 0) {
      const pick = (parseInt(high + low) / 2);
      const res = guess(pick);
  
      if (res === 0) {
        return pick
      }
      if (res === -1) {
        high = pick;
      }
      if (res === 1) {
        low = pick;
      }
    }
  };

  console.log(guessNumber(10))