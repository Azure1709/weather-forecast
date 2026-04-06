const temperature = 55;
const conditions = "sunny";
const sunriseTime = "7:34";
const sunsetTime = "5:09";


console.log("temperature:", temperature, "Fahrenheit");
console.log("conditions:", conditions);
console.log("sunrise:", sunriseTime, "AM");
console.log("sunset:", sunsetTime, "PM");

const sentence = `It's currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} AM and will set at ${sunsetTime} PM.`;
console.log(sentence);

