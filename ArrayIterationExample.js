// const arrays = [10, 11, 12, 13, 64, 34, 09, 50, 25];

// arrays.forEach((value, index) => {
//     console.log(value, index);
// });

// const new_array = [...arrays];
// new_array[0] = 12;

// console.log(arrays, new_array);

// const modified_array = arrays.map((value, index) => {
//     if(value % 2 === 0) {
//         return value * value;
//     }
//     return Math.pow(value, 3)
// });


// console.log(arrays, modified_array);

// const filtered_array = arrays.filter(value => value >= 18)

// console.log(arrays, filtered_array);

// const findValue = arrays.find(value => value === 9)
// console.log(findValue)

// const sumation = arrays.reduce((pre_value, cur_value) => pre_value += cur_value , 0);
// console.log(sumation);

const couples = [
    {
        id: 1,
        name: 'Jyothi Reddy Pala',
        email: 'jyothipala011@gmail.com',
        hobby: 'Talking with Akash'
    },
    {
        id: 2,
        name: 'Parvej Ahammad Akash',
        email: 'akashajaj09@gmail.com',
        hobby: 'Making Jyothi Genious'
    }
];

// couples.forEach(couple => {
//     console.log(couple.name, couple.hobby);
// });

// const new_couples = [];

// couples.forEach(couple => {
//     new_couples.push({
//         ...couple,
//         name: couple.id === 1 ? 'Sona' : 'Baby'
//     })
// })
// console.log(new_couples);

// const new_couples = couples.map(couple => {
//     return {
//         ...couple,
//         name: couple.id === 1 ? 'Sona' : 'Baby'
//     };
// });

// console.log(couples, new_couples)

// const new_pair = couples.map(couple => {
//     return {
//         ...couple,
//         name: couple.id === 1 ? 'Sona' : 'Baby',
//         gender: couple.id === 1 ? 'Female' : 'Male'
//     };
// });

// console.log(new_pair)







