const max =Math.max(6,96,36,25,89,74,14,95,14);
// console.log(max)


const numbers =[32,87,45,68,41,56,15,63];
const arrayMax =Math.max(...numbers);
// console.log(...numbers)
// console.log(arrayMax)

const friends =[656,65,65,9]
const dosto = [... friends] // copy
console. log (dosto)
friends. push (100)
console. log (dosto)
console. log (friends)
// advanced
const sonkha = [...friends, 9999] // add extra elements while copy
console. log (sonkha)