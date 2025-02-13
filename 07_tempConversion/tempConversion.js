const DECIMAL_PLACES = 1;

const convertToCelsius = function(fahrenheit) {
  let convertedValue = ((5 * (fahrenheit - 32)) / 9);
  return (convertedValue === 0) ? 
          convertedValue : 
          +convertedValue.toFixed(DECIMAL_PLACES);
};

const convertToFahrenheit = function(celsius) {
  let convertedValue = ((9 * celsius) / 5) + 32;
  return (convertedValue === 0) ? 
          convertedValue : 
          +convertedValue.toFixed(DECIMAL_PLACES);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
