function pageCount(n, p) {
    let startFront = Math.floor(p / 2); 
    // Calculates number of page turns starting from the front of the book
    // math.floor is used to make sure it's a whole number. 
    //  (every turn flips 2 pages)

    let startBack = Math.floor(n / 2) - Math.floor(p / 2); 
    // Calculate number of page turns starting from the back of the book
    // Total page pairs is n/2, so subtract how far you are from the front 
    // to get flips from the back

    return Math.min(startFront, startBack); 
    // Return the smaller number of flips (minimum turns needed to reach page p)
}
