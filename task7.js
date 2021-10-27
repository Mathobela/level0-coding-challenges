function convertCelsiusToFahrenheit(celsiusTemp) {
  const FahrenheitTemp = (celsiusTemp * 9) / 5 + 32; //metric conversion formula (celsius to fahrenheit)
  return FahrenheitTemp;
}

function convertFahrenheitToCelsius(fahrenhitTemp) {
  const celsiusTemp = ((fahrenhitTemp - 32) * 5) / 9;
  return celsiusTemp;
}
convertCelsiusToFahrenheit(32);
convertFahrenheitToCelsius(100);
