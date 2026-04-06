var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
// 1. Print the highest temperature to the console.
console.log("Highest Temp: " + Math.max(...highTemperatures));

// 2. Print the lowest temperature to the console.
console.log("Lowest Temp: " + Math.min(...lowTemperatures));

// 3. What is the average high temperature from the data set?
var aveHighTemp = highTemperatures.reduce((a, b) => a + b, 0) / highTemperatures.length;
console.log("Average High Temp: " + aveHighTemp);

// 4. What is the average low temperature from the data set?
var aveLowTemp = lowTemperatures.reduce((a, b) => a + b, 0) / lowTemperatures.length;
console.log("Average Low Temp: " + aveLowTemp.toFixed(2));

// 5. What is the median high temperature from the data set?
var sortedHighs = [...highTemperatures].sort((a, b) => a - b);
var mid = Math.floor(sortedHighs.length / 2);
var medianHigh = sortedHighs.length % 2 !== 0 
    ? sortedHighs[mid] 
    : (sortedHighs[mid - 1] + sortedHighs[mid]) / 2;
console.log("Median High Temp:", medianHigh);

// 6. What is the median low temperature from the data set?
var sortedLows = [...lowTemperatures].sort((a, b) => a - b);
var mid = Math.floor(sortedLows.length / 2);
var medianLow = sortedLows.length % 2 !== 0 
    ? sortedLows[mid] 
    : (sortedLows[mid - 1] + sortedLows[mid]) / 2;
console.log("Median Low Temp:", medianLow);