// function isPangram(sentence) {
//     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
//     let lowercased = sentence.toLowerCase()
//     for(i=0; i<=alphabet.length; i++) {
//         if(lowercased.indexOf(alphabet[i]) === -1) {
//             console.log(i);
//             return false;
//         }
//     }
//     return true;
// }

function isPangram(sentence) {
    const alphabetSet = new Set();
    for (let char of sentence.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
           alphabetSet.add(char);
        }
    }
    return alphabetSet.size === 26;
}