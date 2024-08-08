function averageNum(number){
    let sum = 0;
    for(i=0; i < number.length; i++){
        sum += number[i];
    }
    console.log(sum);
    return (sum / number.length);
}