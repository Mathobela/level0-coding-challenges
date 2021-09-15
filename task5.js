function calculateArea (firstLength, secondLength, thirdLength) {
    var semiPeri = 1/2 * (firstLength + secondLength + thirdLength);
    var triangleArea = Math.sqrt(semiPeri * (semiPeri - firstLength) * (semiPeri - secondLength) * (semiPeri-thirdLength)); //Heron's formula
    return triangleArea;
}
