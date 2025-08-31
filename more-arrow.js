const difference = (x, y) => x - y;
const multipul = (first, second, third) => first * second * third;

const getAge =(person) => {
    return person.age
};
const student = {name:'tanzid',age:50};
const age =getAge(student);
// console.log(age)


const getThird =numbers => numbers[2];

const third =getThird([12,36,35,26,32,45,36]);
// console.log(third)

// No parameter
const getPI =() =>Math.pI;
// console.log(getPI())
console.log(this)