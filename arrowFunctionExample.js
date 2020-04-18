const x=(x,y) => x*y;
console.log(x(4,5));
//example 1
var sample=(a,b) => a+b;
console.log(sample(3,4));
//example 2
let example=(q,z) => q%z;
console.log(example(3,5))
//example 3
var add=(p,n) => p-n;
console.log(add(126,34))
//example 4
var text=() => "jyothi";
console.log(text());
// example 5
const multiplicationTable= x => {
    
    for(let i = 1; i <= 10; i++) {
        console.log(`${x} * ${i} = ${x * i}`)
    }
    //5 * 1 = 5
}

//multiplicationTable(5)

const oneToXMultiplicationsTable = x => {
    for(let i = 1; i <= x; i++) {
        let sum = 0;
        for(let j = 1; j <= 10; j++) {
            const mul = i * j
            sum += mul; 
            console.log(`${i} * ${j} = ${ mul }`)
        }
        console.log("----------------------------------");
        console.log(`             ${sum}`);
        

    } 
} 

oneToXMultiplicationsTable(5)