function birthday(s, d, m) {                                    // Function 'birthday' takes 3 arguments: s (array), d (birthday day), and m (birthday month)
    let count = 0;                                              // Initialize a counter variable to track the number of valid subarrays

    for (let i = 0; i <= s.length - m; i++) {               // Loop through the array 's' from 0 to the last possible starting index for a subarray of length m
        let segment = s.slice(i, i + m);                        // Create a subarray 'segment' starting from index i and having length m
        let sum = segment.reduce((acc, val) => acc + val, 0);   // Use reduce() to calculate the sum of elements in 'segment'

        if (sum === d) {                                        // If the sum of the current subarray equals the birthday day 'd'
            count++;                                            // Increment the count (i.e., a valid subarray was found)
        }
    }

    return count;                                               // Return the final count of valid subarrays
}

// Example usage:
let s = [1, 2, 1, 3, 2];                                        // Define an array representing the chocolate bar (squares)
let d = 3;                                                      // Define the birthday day (the desired sum of the subarray)
let m = 2;                                                      // Define the birthday month (the length of the subarray)

// Calling the 'birthday' function and loggin the result to the console
console.log(birthday(s, d, m));                                 // Output the number of valid subarrays where the sum equals 'd'

