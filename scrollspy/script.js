

fetch(
"https://www.google.com"
).then(function(data){
   return data.json()
}).then(json)
console.log(json)
