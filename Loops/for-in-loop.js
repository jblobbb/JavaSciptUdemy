
const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
}


for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop])
}

let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}
console.log(total);