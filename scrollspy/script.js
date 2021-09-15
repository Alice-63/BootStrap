var box=document.getElementById("box")



function getAll(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
    })
   

}
