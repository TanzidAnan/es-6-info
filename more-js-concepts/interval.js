console.log(1)
console.log(2)
console.log(3)
console.log(4)
setTimeout(() =>{
    console.log(212)
},3000)
console.log(5)
console.log(6)
console.log(7)
let num =0; 
const clockId= setInterval(() =>{
    num++
    console.log('i m u');
    
    if(num >6){
        clearInterval(clockId)
    }
    console.log( num)
},2000)
console.log(8)
console.log(9)

