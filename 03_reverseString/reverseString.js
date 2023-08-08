const reverseString = function(str) {
    const charArray = str.split("");
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
