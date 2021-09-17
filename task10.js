function findCommonChar (string1, string2) {
    var longString = Math.max(string1.length, string2.length);
    var commonList = "";
    var string1LowCase = string1.toLocaleLowerCase();
    var string2LowCase = string2.toLocaleLowerCase();
    for (var i = 0; i < longString; i++) {
        if (string2LowCase.includes(string1LowCase[i])) {
            if (commonList.includes(string1LowCase[i])) {
                continue;
            }
            commonList = commonList + string1LowCase[i] + ", ";
        }
    }
    var newList = commonList.trim();
    var newList = newList.slice(0, -1);
    console.log(newList);
}
findCommonChar();
