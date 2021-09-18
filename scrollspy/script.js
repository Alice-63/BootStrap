


const p=new Promise(function(success,error){
    if(x=3)
    {
        error()
    }
}).then(function(){
    console.log("Basariili")
},function(){
    console.log("hata")
})