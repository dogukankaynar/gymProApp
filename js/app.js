import { memberRegistration } from "./storage.js";
let subButton = document.getElementById("subButton");

let data = JSON.parse(localStorage.getItem("myData"));

data.map((data) => {
  console.log(data);
});

// let time = new Date(data[0].sonGün.getTime())
/*   ==========>datadan gelen date' ye göre kalan günleri hesaplar<========
for(let i in data){
 let time = new Date(data[i].sonGün);
 let newTime = time.getTime();
 console.log(time);
 console.log("yeni tarih", newTime);

let now = new Date()
 let remainingTime = newTime - now.getTime();
 let  remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  console.log(data[i].name+" Üyesinin Kalan Günü: "+remainingDays)
}*/

function eventListener() {
  subButton.addEventListener("click", memberRegistration); //üye kayıtını başlatır.
}

eventListener();
