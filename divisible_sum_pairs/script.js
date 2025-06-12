
function divisibleSumPair(n, k, ar) {               // Define a function with 3 parameters: n (array length), k (divisor), ar (array)
    let count = 0;                                  // Initialize a counter to keep track of valid pairs
  
    for (let i = 0; i < ar.length; i++) {           // Outer loop to pick the first number in the pair
      for (let j = i + 1; j < ar.length; j++) {     // Inner loop to pick the second number (after i) to form a pair
        if ((ar[i] + ar[j]) % k === 0) {            // Check if the sum of the pair is divisible by k
          count++;                                  // If it is, increase the count by 1
        }
      }
    }
    return count;                                   // Return the total number of valid pairs found
  }
  