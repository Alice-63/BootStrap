
async function hello(){

    let response= await fetch("http://localhost/test.php");
    let results= await response.json();


 
    
}

hello()
