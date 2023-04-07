import {getDataUi} from "./ui.js"
let regirsterButton = document.getElementById('regirsterButton')


const startStroge = () => {
  const data = localStorage.getItem("myData");
  if (!data) {
    localStorage.setItem("myData", JSON.stringify([]));
  }
  console.log("çalıstım");
};
 startStroge();

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
const registerPageHref = ()=>{
  window.location.href="register.html"
}

function eventListener() {
   window.onload= getDataUi;
  regirsterButton.addEventListener('click',registerPageHref)
 
}

 eventListener();
