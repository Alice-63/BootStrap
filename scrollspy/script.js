
async function hello(){

    let response= await fetch("/mona_lisa.jpg");
    let results= await response.blob();
    console.log(results)
}

hello()

