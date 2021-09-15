function convertCelsiusToFahrenheit (celsiusTemp) {
    var FahrenheitTemp = celsiusTemp * 9/5 + 32; //metric conversion formula (celsius to fahrenheit)
    return FahrenheitTemp;
}

function convertFahrenheitToCelsius (fahrenhitTemp) {
    var celsiusTemp = (fahrenhitTemp - 32) * 5/9;
    return celsiusTemp;
}
