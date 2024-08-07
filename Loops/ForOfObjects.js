const movieReviews = {
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8,
    'In Bruges' : 9,
    Amadeus : 10,
    'Kill Bill' : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline : 7.5
};

// doesn't work
// for (let x of movieReviews) {
//     console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings){
    total += r;
}
let average = total/ratings.length;
console.log(average);