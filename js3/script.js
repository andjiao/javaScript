//fetch is promised based
fetch('https://jsonplaceholder.typicode.com/users',{
    method:'POST',
    headers: {
        'Content-type': 'application/json'
    },
    //her konverter vi javaScript til jason, da den ellers ikke printes korrekt i browser-consol
    body:JSON.stringify(
        {
            name:'kim possible'
        }
    )
   
})
.then(res=>{
  //res.json())
   /* {
    if(res.ok){
        console.log('succes')
    }else{
        console.log('unsuccesful')

    }*/

    return res.json
})
.then(data=>console.log(data))
.catch(error=>console.log('failed'))