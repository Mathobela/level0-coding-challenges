function findMax (firstNum, secondNum, thirdNum) {
    var maxNum = 0;
    for (var i = 0; i < 3; i++) {
        if (firstNum > maxNum) {
            maxNum = firstNum;
        }
        if (secondNum > maxNum) {
            maxNum = secondNum;
        }
        if (thirdNum > maxNum) {
            maxNum = thirdNum;
            }
     }
    return maxNum;
}
