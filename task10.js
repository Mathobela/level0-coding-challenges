function findCommonChar (string1, string2) {
    const longString = Math.max(string1.length, string2.length);
    let commonList = "";
    const string1LowCase = string1.toLocaleLowerCase();
    const string2LowCase = string2.toLocaleLowerCase();
    for (let i = 0; i < longString; i++) {
        if (string2LowCase.includes(string1LowCase[i])) {
            if (commonList.includes(string1LowCase[i])) {
                continue;
            }
            commonList += string1LowCase[i] + ", ";
        }
    }
    let newList = commonList.trim();
    newList = newList.slice(0, -1);
    console.log(newList);
}
findCommonChar("Mathobela", "That's my name");
