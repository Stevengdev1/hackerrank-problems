function breakingRecords(scores){
    let highest = scores[0];                    // Start with the first score as the highest
    let lowest = scores[0];                     // Start with the lowest score as the lowest
    let highBreaks = 0;                         // Counter for the high score records broken.
    let lowBreaks = 0;                          // Counter for low score records broken. 
    
    for (let i = 1; i < scores.length; i++) {   // Start from the second score
        if (scores[i] > highest) {              // if the current score is greater than the highest recorded score.
            highest = scores[i];                // Update the highest score.
            highBreaks++;                       // Increment the high score break count.
        } else if (scores[i] < lowest) {        // Else if the current score is less than the lowest recorded score.
        lowest = scores[i];                     // Update the lowest score
        lowBreaks++;                            // Increment low score break count.
        }
    }
return [highBreaks,lowBreaks];                  // Return the counts as an array
}

scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
// Expected Output 2  4

console.log(breakingRecords(scores))

