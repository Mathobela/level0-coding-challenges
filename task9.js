function findVowels (str) {
    const vowels = ["a","A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let foundVowels = "";
    for (let char of str) {
        if (vowels.includes(char)) {
            if (foundVowels.includes(char)) {
                continue;
            }
        currentVowel = char;
        foundVowels += char + ", ";
        }
    }
    let vowelList = foundVowels.trim();
    vowelList = vowelList.slice(0, -1);
    console.log(vowelList);
}
findVowels("Paulina");

