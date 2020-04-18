let  primeNumber = x => {  
    for ( let i = 1; i <= x; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
        
    }
}

``
let isPrime = input => {
     for (let j = 2; j <= (input/2); j++) {
         if ( input % j === 0) {
             return false;
         }
         return true;
    }
}


primeNumber(50);