function calculateArea (firstLength, secondLength, thirdLength) {
    let semiPeri = 1/2 * (firstLength + secondLength + thirdLength);
    let triangleArea = Math.sqrt(semiPeri * (semiPeri - firstLength) * (semiPeri - secondLength) * (semiPeri-thirdLength)); //Heron's formula
    return triangleArea;
}
calculateArea(3, 6, 7);
