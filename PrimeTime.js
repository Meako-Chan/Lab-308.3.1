let n = 23;

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
    for(let i = 2; i < Math.sqrt(number)+1; i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}