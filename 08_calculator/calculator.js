const add = function(a,b) {
  
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  let sum = 0;
  for (let i =0; i < arr.length;i++){
    sum += arr[i];
  }
  return sum;
  
	
};

const multiply = function(arr) {
  let multiplication = 1; // Initialize the multiplication result to 1
  
  for (let i = 0; i < arr.length; i++) {
    multiplication *= arr[i];
  }
  
  return multiplication; // Return the final multiplication result
};

const power = function(a, b) {
  let result = 1; // Initialize the result to 1
  
  for (let i = 0; i < b; i++) {
    result *= a; // Multiply the result by 'a' in each iteration
  }
  
  return result;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
