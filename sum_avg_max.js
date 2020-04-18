function sum_average_max() {
    let sum = 0, avg = 0, max=0;

    for( let i  in  arguments) {
         sum += arguments[i];
         max = (max < [i]) ? arguments[i] : max;
    }
    avg = sum / arguments.length;

    console.log('Sum: ', sum, 'Average:', avg, 'Maximum: ', max)
 
}

sum_average_max(1,2,3,6,7,8,9,10);