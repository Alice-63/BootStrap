

const p=new Promise(function(success,error){

let x=0;
    if(x==0)
    {
        success(x)
     
    }
    else{
        error()
     
    }
})

p.then(function(data){
    console.log(data)
})