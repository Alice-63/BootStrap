
async function hello(){

    let response= await fetch("http://localhost/test.php");
    let results= await response.json();


 
    
}

hello()

function test(){
    fetch("http://localhost.test.php")
    .then(response => {response.json()})
    .then(data=> console.log(data)
  }
  
  async function test2(){
    let response= await fetch("url")
      let result= await response
  }