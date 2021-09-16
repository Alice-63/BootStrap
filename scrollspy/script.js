

const p=new Promise(function(success,error){

let x=0;
    if(x==0)
    {
        success()
        console.log(p)
    }
    else{
        error()
        console.log("error!")
    }
})