function sumMinAvgMaxPrime() {
    let sum=0,avg=0,max=0,min=arguments[0];
    for( let i in arguments) {
        sum += arguments[i];
        max = (max < arguments[i] ) ?  arguments[i] : max;
        min = (min > arguments[i] ) ? arguments[i] : min ; 
        if ( isPrime(arguments[i]) ) {
        
            console.log("Prime: ", arguments[i] );
        }
    }

    avg = sum / arguments.length;
    console.log("Sum: ", sum, "Max: ", max, "Min: ",min, "Avg: ",avg )

}

const isPrime = i => {
    for (let j = 2; j <= (i/2); j++) {
       if( i % j === 0) {
           return false;
       }
    }
    return true;
}


 sumMinAvgMaxPrime(12,3,24,12,56,7,9);