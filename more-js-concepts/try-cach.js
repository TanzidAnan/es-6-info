function checkAge(){
    const ageFied =document.getElementById('age');

    const ageNumber =ageFied.value;

    const errorTag =document.getElementById('error')
    try{
        const age =parseInt(ageNumber);
        if(isNaN(age)){
            throw 'Please Enter a Number'
        }
        else if(age<18){
            throw 'bacha kaccha not allowed'
        }
        errorTag.innerHTML =''
    }
    catch(error){
        console.log("Error",error)
        errorTag.innerText=`something wrong`
    }
    finally{
        console.log('all done inside try catch')
    }
}

checkAge()