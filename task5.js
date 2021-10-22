function calculateArea (firstLength, secondLength, thirdLength) {
    const semiPeri = 1/2 * (firstLength + secondLength + thirdLength);
    const triangleArea = Math.sqrt(semiPeri * (semiPeri - firstLength) * (semiPeri - secondLength) * (semiPeri-thirdLength)); //Heron's formula
    return triangleArea;
}
calculateArea(3, 6, 7);
