
function migratoryBirds(arr) {
    const count = {};                           // Create an empty object to store how many times each bird ID appears
  
    for (let id of arr) {
                                                // For each bird ID in the array, add it to the count object or increase its count by 1
      count[id] = (count[id] || 0) + 1;         // If count[id] doesn't exist yet, treat it as 0 and add 1
    }
  
    let max = 0;                                // This will hold the highest number of sightings for any bird
    let minID = Infinity;                       // This will hold the bird ID with the most sightings (smallest ID if tie)
  
    for (let id in count) {
      let numID = Number(id);                   // Convert the string key to a number so we can compare numerically
  
      if (
        count[id] > max ||                      // If this bird ID has more sightings than the current max
        (count[id] === max && numID < minID)    // Or if there's a tie in sightings but this ID is smaller
      ) {
        max = count[id];                        // Update max to this bird's sighting count
        minID = numID;                          // Update minID to this bird ID
      }
    }
  
    return minID;                               // Return the bird ID that has the most sightings (smallest if tie)
  }
  


  