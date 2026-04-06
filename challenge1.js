var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

// Log today's high temperature to the console.
console.log("Today's HighTemp: " + todaysWeather.temperature.high + " F");
// Log today's low temperature to the console.
console.log("Today's LowTemp: " + todaysWeather.temperature.low + " F");
// Log today's conditions to the console.
console.log("Today's Conditions: " + todaysWeather.conditions);
// Log today's sunrise time to the console.
console.log("Today's Sunrise: " + todaysWeather.astronomy.sunrise);
// Log today's sunset time to the console.
console.log("Today's Sunset: " + todaysWeather.astronomy.sunset);

// Use string template literals to create a more detailed description of today's weather.