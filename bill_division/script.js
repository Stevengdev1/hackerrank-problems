

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// If Brian did not overcharge Anna, print Bon Appetit on a new line; 
// otherwise, print the difference that Brian must refund to Anna.
// This will always be an integer.


function bonAppetit(bill, k, b) {
    let total = 0;                          // variable to store the sum of the bill (excludes skipped item)

    for (let i = 0; i < bill.length; i++) { // Loop through each item in the bill
        if (i !== k) {                      // If the current index is not the one Anna didn't eat
            total = total + bill[i];        // Add the cost of the item to the total
        }
    }

    let fairAmount = total / 2;             // Calculate Anna's fair share (split the total in half)

    if (fairAmount === b) {                 // If Brian charged Anna exactly her fair share
        console.log("Bon Appetit");         // Print "Bon Appetit" (no overcharge)
    } else {
        console.log(b - fairAmount);        // Otherwise, print the amount Brian overcharged Anna
    }
}


