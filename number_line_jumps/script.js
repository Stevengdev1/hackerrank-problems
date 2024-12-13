
function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {                                                    // Check If the kangos (kangaroos) start at the same position, 
        return "YES";                                                   // If starting positions are the same, return "YES".
    }
    const distanceDiff = x2 - x1;                                       // Calc diff in positions, a + value means kango 2 starts ahead of kango 1. 
    const velocityDiff = v1 - v2;                                       // Calc relative velocity, a + value means kango 1 is faster than kango 2.
    if (velocityDiff !== 0 && distanceDiff % velocityDiff === 0) {      // Check if the velocities are different (to avoid division by zero)
                                                                        // AND if the relative distance is divisible by the relative velocity.
                                                                        // This ensures both kangos can meet @ same point after the same # of jumps.
        const n = distanceDiff / velocityDiff;                          // Calc exact # of jumps for kangos to meet, a + value means meeting point is in the future.
        if (n > 0) {                                                    // Check if the number of jumps is positive, a - value means they meet in the past, which isn't valid.                                                                  
            return "YES";                                               // Return "YES" if the kangos meet after a positive number of jumps.
        }
    }                                                            
    return "NO";                                                        // Return "NO" if the kangos cannot meet under the given conditions.
}
                                                                                                                                                                                                
// x1 (starting position of the first kangaroo), 
// v1 (velocity of the first kangaroo), 
// x2 (starting position of the second kangaroo), 
// v2 (velocity of the second kangaroo).

  // Example usage
  const v1 = 3;
  const x1 = 0;                                                          
  const x2 = 4;                              
  const v2 = 2; 
  console.log(kangaroo(x1, v1, x2, v2)); 

