// function to convert fahrenheit temp to celsius
// and determine is temp is above freezing
// defined freeing as being >= 0


function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c > 0)
    return (c + " is above freezing temperature")
  else
    return (c + " is freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}

console.log(weatherInfo(50))
console.log(weatherInfo(20))
console.log(weatherInfo(100))
console.log(weatherInfo(-10))
