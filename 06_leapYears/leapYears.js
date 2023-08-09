const leapYears = function(year) {
    if (year % 4 !== 0) {
        return false;
    }
    
    // Years divisible by 100 are not leap years unless they are also divisible by 400
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    
    // If the year is divisible by 4 and not divisible by 100 (or divisible by 400), it's a leap year
    return true;
};

// Do not edit below this line
module.exports = leapYears;
