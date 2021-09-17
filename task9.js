function findVowels (str) {
    var vowels = ["a","A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var currentVowel = "";
    var foundVowels = "";
    var strLowerCase = str.toLocaleLowerCase();
    for (var char of strLowerCase) {
        if (vowels.includes(char)) {
            if (foundVowels.includes(char)) {
                continue;
            }
            currentVowel = char;
            foundVowels = foundVowels + currentVowel + ", ";

        }
    }
    var vowelList = foundVowels.trim();
    vowelList = vowelList.slice(0, -1);
    console.log(vowelList);
}
findVowels();
