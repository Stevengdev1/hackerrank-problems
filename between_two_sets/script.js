function gcd(a, b) {                            // Define a function to find the Greatest Common Divisor (GCD) of two numbers
    while (b !== 0) {                           // Keep looping while b is not zero
        let temp = b;                           // Store the current value of b temporarily
        b = a % b;                              // Set b to the remainder of a divided by b
        a = temp;                               // Set a to the old value of b (saved in temp)
    }
    return a;                                   // When b is 0, a is the GCD — return it
}
function lcm(a, b) {                            // Define a function to find the Least Common Multiple (LCM) of two numbers
    return (a * b) / gcd(a, b);                 // Use the formula: LCM = (a * b) / GCD of a and b
}
function getGCDOfArray(arr) {                           // Define a function to find the GCD of an array of numbers
    return arr.reduce((acc, val) => gcd(acc, val));     // Use reduce to apply gcd to the whole array one pair at a time
}
function getLCMOfArray(arr) {                           // Define a function to find the LCM of an array of numbers
    return arr.reduce((acc, val) => lcm(acc, val));     // Use reduce to apply lcm to the whole array one pair at a time
}
function getTotalX(a, b) {                              // Define the main function to count numbers between sets a and b
    const lcmA = getLCMOfArray(a);                      // Step 1: Get the LCM of all numbers in array a
    const gcdB = getGCDOfArray(b);                      // Step 2: Get the GCD of all numbers in array b

    let count = 0;                                      // Initialize a counter to count valid numbers
    for (let i = lcmA; i <= gcdB; i += lcmA) {          // Loop through multiples of lcmA up to gcdB
        if (gcdB % i === 0) {                           // Check if i divides evenly into gcdB
            count++;                                    // If it does, it's valid — add 1 to the count
        }
    }
    return count;                                       // After the loop, return the total count of valid numbers
}
