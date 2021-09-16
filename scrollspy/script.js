

const p=new Promise(function(success,error){

let x="Hallo";
    if(x==0)
    {
        success(x)
     
    }
    else{
        error(x+1)
     
    }
})

p.then(function(data){
    console.log(data)
}).catch(function(data2){
    console.log(data2)
})