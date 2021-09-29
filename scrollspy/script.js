
async function hello(){

    let response= await fetch("http://localhost/test.php");
    let results= await response.blob();


 
    let link=URL.createObjectURL(results);
    console.log(link)
    
}

hello()
