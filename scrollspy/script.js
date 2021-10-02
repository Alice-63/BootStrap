import app from './app'
async function hello(){

    let response= await fetch("./app.js");
    let results= await response.text();


 
    
}

hello()

function test(){
    fetch("./app.js")
    .then(response => response.json())
    .then(data=> console.log(data))
}
    
  
  
  async function test2(){
    let response= await fetch("./app.js")
      let result= await response
  }