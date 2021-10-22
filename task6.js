function findMax () {
    let maxNum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }
    return maxNum;
}
findMax(3,2,12,40);
