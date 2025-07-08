function getMoneySpent(keyboards, drives, b) {
    let maxLeftover = -1;                               // Initialize with -1; if no valid pair is found, -1 will be returned

    for (let i = 0; i < keyboards.length; i++) {        // Loop through each keyboard price
        for (let j = 0; j < drives.length; j++) {       // For each keyboard, loop through each drive price
            let totalCost = (keyboards[i] + drives[j]); // Set variable totalCost which sums a pair of keyboard + drive

            if (totalCost <= b && totalCost > maxLeftover) { 
                // Check if the total is within budget AND is the most expensive valid combo so far
                maxLeftover = totalCost;                // Update maxLeftover to the better combo
            }    
        }
    }

    return maxLeftover;                                 // Return the best total cost within budget, or -1 if no valid combo was found
}


