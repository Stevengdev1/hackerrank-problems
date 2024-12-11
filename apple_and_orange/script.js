function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesArray = [];                               // empty array to store apples that land within the range
    const orangesArray = [];                              // empty array to store oranges that land within the range
  
    for (let i = 0; i < apples.length; i++) {             // Loop through each apple in the apples array
      const landingPosition = a + apples[i];              // Calculate the landing position of the current apple
      if (landingPosition >= s && landingPosition <= t) { // Check if the landing position is within the range [s, t]
        applesArray.push(apples[i]);                      // If within range, add the apple's value to applesArray
      }
    }
  
    for (let i = 0; i < oranges.length; i++) {            // Loop through each orange in the oranges array
      const fallPosition = b + oranges[i];                // Calculate the landing position of the current orange
      if (fallPosition >= s && fallPosition <= t) {       // Check if the landing position is within the range [s, t]
        orangesArray.push(oranges[i]);                    // If within range, add the orange's value to orangesArray
      }
    }
  
    console.log(applesArray.length);                      // Log the total number of apples that landed within the range
    console.log(orangesArray.length);                     // Log the total number of oranges that landed within the range
  }
  
  // Example usage
  const apples = [2, 3, -4];                              // Array representing the distances apples fall relative to the apple tree
  const oranges = [3, -2, -4];                            // Array representing the distances oranges fall relative to the orange tree
  console.log(countApplesAndOranges(7, 10, 4, 12, apples, oranges)); 
                                                          // Logs the counts of apples and oranges in range (will also log undefined 
                                                          // because the function does not explicitly return a value)
  
    
  