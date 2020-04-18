const love = {
    caring: 100,
    sharing: 80,
    supporting: 85,
    trust: 100
};

console.log(Object.keys(love));

console.log(Object.values(love));

for (const l in love) {
    console.log(l, love[l]);
}

const couple = {
    ...love
};

couple.caring = 120;

console.log(love.caring, couple.caring, couple)