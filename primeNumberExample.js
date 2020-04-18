let primeNumbers = x => {
    for (let i = 1; i <= x; i++) {
       if(isPrime(i)){
           console.log('Prime:', i)
       }
     }
        
}

const isPrime = i => {
     for(let j = 2; j <= (i/2); j++){
        if ( i % j === 0)
        {  
            return false;
        }
     }
     return true;
}

primeNumbers(10000);