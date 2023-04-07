let listContent = document.getElementById("listContent");
let data = JSON.parse(localStorage.getItem("myData"));


const remainingDays = ()=>{//kalan günü hesaplar
  let remainingDay=[];
   data.map((item)=>{
     let time = new Date(item.sonGün)
     let newTime=time.getTime()
     let now = new Date()
     let remainingTime =newTime - now.getTime()
     remainingDay.push(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  })
  return remainingDay
}

const getDataUi = () => {//table functioın
  let remainingDay = remainingDays();
  data.map((item,index) => {
    let time = new Date(item.kayıtTarihi);
    let newTime = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    listContent.innerHTML += `
        <div class="list-content-item">
         <div class="list-item">${item.name}</div>
         <div class="list-item">${item.uyelıkSuresı} Aylık</div>
         <div class="list-item">${newTime}</div>
         <div class="list-item">${remainingDay[index]}</div>
         </div>
        `;
  });
};


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
export { getDataUi };
