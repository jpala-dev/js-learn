// const couples = [
//     {
//         id: 1,
//         name: 'Jyothi Reddy Pala',
//         email: 'jyothipala011@gmail.com',
//         hobby: 'Talking with Akash'
//     },
//     {
//         id: 2,
//         name: 'Parvej Ahammad Akash',
//         email: 'akashajaj09@gmail.com',
//         hobby: 'Making Jyothi Genious'
//     },
//     {
//         id: 3,
//         name: 'Sona, Queen, Babe, Love, Jo Jo, Love Love',
//         email: 'jyothipala011@gmail.com',
//         hobby: 'Talking with Akash'
//     },
//     {
//         id: 4,
//         name: 'King, Baby, Hero, Monkey, Naughty Boy',
//         email: 'akashajaj09@gmail.com',
//         hobby: 'Making Jyothi Genious'
//     }
// ];


// const new_couples = [];

// couples.forEach(couple => {
//     if(couple.email == 'jyothipala011@gmail.com') {
//         new_couples.push({ ...couple })
//     }
// });

// console.log(new_couples);

// const new_couples = couples.filter(couple => {
//     if(couple.email === 'jyothipala011@gmail.com') {
//         couple.name = couple.id === 1 ? 'Sona' : 'Baby',
//         couple.gender = couple.id === 1 ? 'Female' : 'Male'
//         return true;
//     }
//     return false;
// } );

// console.log(couples, new_couples);

// const couple = couples.find(c => c.email === 'jyothipala011@gmail.com');

// console.log(couple)

// const couples = [
//     {
//         id: 1,
//         name: 'Jyothi Reddy Pala',
//         email: 'jyothipala011@gmail.com',
//         hobby: 'Talking with Akash'
//     },
//     {
//         id: 2,
//         name: 'Parvej Ahammad Akash',
//         email: 'akashajaj09@gmail.com',
//         hobby: 'Making Jyothi Genious'
//     }
// ];

// const kissing = couples.reduce((pre, cur) => {
//     if(cur.id == 1) {
//         return pre += `${cur.name} is kissing `;
//     }

//     return pre += cur.name;
// }, "")

// console.log(kissing);
