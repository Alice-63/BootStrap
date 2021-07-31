

function add()

{
    let str=document.getElementById("input").value;

str=str.padStart(3,0)
$("#container").append(str);
}