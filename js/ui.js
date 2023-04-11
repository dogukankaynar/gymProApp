import { getAllMembers, deleteMember } from "./personService.js";

let listContent = document.getElementById("listContent");

const remainingDaysByMember = (member) => {
  //kalan günü hesaplar
  let remainingDay = [];
  let time = new Date(member.endDate);
  let newTime = time.getTime();
  let now = new Date();
  let remainingTime = newTime - now.getTime();
  remainingDay.push(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  return remainingDay;
};

const getDataUi = async () => {
  //table functioın
  const members = await getAllMembers();
  members.map((member) => {
    const remainingDay = remainingDaysByMember(member);
    let time = new Date(member.registerDate);
    let newTime = `${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`;

    // let deleteButton = document.createElement("button");
    // deleteButton.addEventListener("click", () => console.log("sa"));
    // deleteButton.innerText = "delete";
    // deleteButton.id = member.id + "delete";

    listContent.innerHTML += `
    <div class="list-content-item" id="${member.id}">
    <a href="register.html?id=${member.id}"> <div class="editButton"><img class="edit-icon" src="./style/icon/edit.png" alt=""></div></a>
    <div class="list-item">${member.name}</div>
    <div class="list-item">${member.period} Aylık</div>
    <div class="list-item">${newTime}</div>
    <div class="list-item">${remainingDay}</div>
   <button class="button" name="delete-button" id="${member.id}" >delete</button>
    </div>
    `;
    // console.log('deleteButton', deleteButton)
  });
  const buttons = document.querySelectorAll('[name="delete-button"]');
  buttons.forEach((button) => {
    button.addEventListener("click", async () => await deleteMember(button.id));
  });
  // document
  //   .getElementById("deleteButton")
  //   .addEventListener("click", () => deleteMember(member.id));
};

export { getDataUi };
