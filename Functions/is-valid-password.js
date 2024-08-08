function isValidPassword(password, username) {
    if(password.length < 8){
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
    if(password === username){
        return false;
    }
    return true;    
}