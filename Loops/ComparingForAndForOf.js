// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ];

// for(let i = 0; i<magicSquare.length;i++){
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j<row.length;j++){
//         console.log(row[j]);
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//     let sum = 0;
//     for(let num of row){
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let index = 0; index < words1.length; index++) {
    console.log(words1[index], words2[index]);    
}

