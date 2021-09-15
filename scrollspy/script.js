var box=document.getElementById("box")



function getAll(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        for(let i=0 ; i<data.length; i++)
        box.innerHTML+="ID: "+data[i].id+"User ID: "+data[i].userId+"<br>"+"Title: "+data[i].title+"<br>"+"Body: "+data[i].body+"<br>"
    })
   

}
