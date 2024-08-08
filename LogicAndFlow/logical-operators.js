// && and, || or, ! not


let password = "chickenGal";

if (password.length >= 8 && password.indexOf(' ') === -1){
    console.log('Valid Password');
} else {
    console.log('Invalid Password');
}

let num = 9;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1-10');
} else {
    console.log('Number must be between 1-10');
}

let age = 55;

if (age < 6 || age >= 65) {
    console.log('you get in for free');
} else {
    console.log('you have to pay');
}

let colour ='violet';

if (colour === 'purple' || colour === 'orchid' || colour === 'violet') {
    console.log('Great Choice');
}

let loggedInUser;

// if there isnt a logged in user do something
if(!loggedInUser){
    console.log('Get out of here!');
}

let flavour = 'watermelon';

if (flavour !== 'grape' && flavour !== 'cherry') {
    console.log('we do not have that flavour');
}

if (!(flavour === 'grape' || flavour === 'cherry')) {
    console.log('we do not have that flavour');
}