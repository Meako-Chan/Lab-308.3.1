let n = 7727;

while(n){
    n++;
    if(isPrime(n)){
        break;
    }
}
console.log(n);



function isPrime(number){
    if(number <= 1){
        return false;
    }
    for(let i = 2; i < Math.sqrt(number); i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}