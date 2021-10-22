function findMax (firstNum, secondNum, thirdNum) {
    let maxNum = 0;
    for (let i = 0; i < 3; i++) {
        if (firstNum > maxNum) {
            maxNum = firstNum;
        }
        else if (secondNum > maxNum) {
            maxNum = secondNum;
        }
        else if (thirdNum > maxNum) {
            maxNum = thirdNum;
            }
     }
    return maxNum;
}
findMax(1, 3, 2);
