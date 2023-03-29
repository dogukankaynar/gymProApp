let üye =[
    {"adı":"Doğukan","soyadı":"Kaynar"},
    {"adı":"Oğuzhan","soyadı":"Kaynar"},
]
localStorage.setItem("Üyeler:",JSON.stringify(üye));

let response= JSON.parse(localStorage.getItem("Üyeler:"));
console.log(response);

for(let i in response){
    console.log(`üye adı : ${response[i].adı}`);
}