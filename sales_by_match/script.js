function sockMerchant(n, ar) {
    let pairs = {};                     // Create an object to count how many times each sock color appears
    let totalPairs = 0;                 // Initialize a counter to keep track of the total number of pairs

    // Step 1: Loop through the array of socks to count each color
    for (let i = 0; i < ar.length; i++) {
        let sockColor = ar[i];          // Get the current sock color

        if (pairs[sockColor]) {         // If we've already seen this color before...
            pairs[sockColor] += 1;      // ...increase the count for this color by 1
        } else {
            pairs[sockColor] = 1;       // ...otherwise, start the count at 1
        }
    }

    // Step 2: Loop through the counted colors to calculate how many full pairs exist
    for (let color in pairs) {                      // for each color in pairs ...
        totalPairs += Math.floor(pairs[color] / 2); // Each pair = 2 socks. Divide count by 2 and round down.
    }

    return totalPairs;                              // Return the total number of matching pairs found
}
