
// const add = (a, b, callback) => {
//     return callback(a+b);
// }

// add(2, 4, (sum) => {
//     console.log(sum);
// }, (error) => {
//     console.log(error);
// })


const jsPromiseFunc = condition => {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve({name: "Tremula Reddy"});
        }else {
            reject({ name: "RamBa" });
        }
    })
}

jsPromiseFunc(false).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("This is final block");
})