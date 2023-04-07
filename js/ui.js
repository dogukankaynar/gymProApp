let listContent = document.getElementById("listContent");
let listContentItem = document.getElementsByClassName("list-content-item");
console.log(listContentItem);
let data = JSON.parse(localStorage.getItem("myData"));
const getDataUi = () => {
  data.map((item) => {
    let time = new Date(item.kayıtTarihi);
    let newTime = `${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`;

    console.log(newTime);
    listContent.innerHTML += `
        <div class="list-content-item">
         <div class="list-item">${item.name}</div>
         <div class="list-item">Alfreds Futterkiste</div>
         <div class="list-item">${newTime}</div>
         <div class="list-item">30 Gün</div>
         </div>
        `;
  });
};

export { getDataUi };
