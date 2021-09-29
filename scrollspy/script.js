
async function hello(){

    let response= await fetch("https://jsonplaceholder.typicode.com/todos/3");
    let results= await response.json();
    console.log(results)
}

hello()

function hello2 (){
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
    })
}

hello2()
