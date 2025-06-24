function countingValleys(steps, path) {
    let valley = 0;                 // Counter to track the number of valleys
    let elevation = 0;              // Current elevation, starts at sea level (0)

    for (let i = 0; i < path.length; i++) {  // Loop through each step in the path string
        let step = path[i];         // Get the current step character ('U' or 'D')

        if (step === 'U') {         // If the hiker goes up
            elevation += 1;         // Increase elevation by 1

            if (elevation === 0) {
                valley += 1;        // If we just came UP to sea level, that means a valley ended increase by 1
            }

        } else if (step === 'D') {  // If the hiker goes down
            elevation -= 1;            // Decrease elevation by 1
        }
    }

    return valley;                  // Return the total number of valleys walked through
}
