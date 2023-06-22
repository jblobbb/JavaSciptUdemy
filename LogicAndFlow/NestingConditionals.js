let password = 'kitty';

if(password.length >= 6) {
    if(password.indexOf(' ') === -1){
        console.log('Valid Passowrd');
    } else {
        console.log('password is long enough, but cannot contain spaces');
    }

} else {
    console.log('Password must be longer!');
}