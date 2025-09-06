function checkAge(){
    const ageFied =document.getElementById('age').value;
    const errorTag =document.getElementById('error')
    try{
        console.log(tanzid )
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