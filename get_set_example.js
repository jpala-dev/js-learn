let clothes={
    name:"jean",
    brand:"jockey",
    cost:2000,
    city:"hydrabad",
    detail:function() {
        return this.name+" "+this.brand+" "+this.cost+" "+this.city;
    }
};
console.log(clothes.detail());
//difference between function and getter method
let teacher={
    bangla:"akash",
    hindi:"ravi",
    maths:"sivaji",
    science:"kumari",
    get bang() {
        return this.bangla;
    }
};
console.log(teacher.bang);
//setter method
const feelings={
    type1:"love",
    type2:"care",
    type3:"responsibility",
    type4:" ",
    set type(type) {
         this.type4=type;
    }
};
feelings.type="marriage";
console.log(feelings.type4);
