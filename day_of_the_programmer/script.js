//LeapYr = 29 days
//NonLeapYr = 28 days

//                  Days in each month:
// Month	Days in regular year	Days in leap year
// January	31	                        31
// February	28	                        29
// March	31	                        31
// April	30	                        30
// May	31	31                          31
// June	30	30                          30
// July	31	31                          31
// August	31	                        31
//-----------------------------------------------------
// Total	243	                        244

// Regular year 256 - 243 = 13
// Leap year    256 - 244 = 12
// Because the number of days in each month is fixed, and the only month that changes
// is February, the 256th day will always land in September, and it's always either 
// the 12th or the 13th.

function dayOfProgrammer(year) {
    // Special case: Transition year from Julian to Gregorian
    if (year === 1918) {
        return "26.09.1918";
    }

    // Julian Calendar (before 1918)
    if (year < 1918) {
        if (year % 4 === 0) {
            return `12.09.${year}`; // Leap year
        } else {
            return `13.09.${year}`; // Non-leap year
        }
    }

    // Gregorian Calendar (after 1918)
    if (year > 1918) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            return `12.09.${year}`; // Leap year
        } else {
            return `13.09.${year}`; // Non-leap year
        }
    }
}


