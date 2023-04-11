import { addMember ,updateMember} from "./personService.js";
import { isEdit ,getIdFromQuery} from "./edit.js";
let personName = document.getElementById("personName");
let personSurname = document.getElementById("personSurname");
let ageInput = document.getElementById("ageInput");
let personEmail = document.getElementById("personEmail");
let subButton = document.getElementById("subButton");

let person = [];
console.log("isEdit", isEdit);
//üyelik ay süresini hesaplar
const calculatePeriod = () => {
  let selectPeriod = document.getElementById("period");
  let selectValue = parseInt(
    selectPeriod.options[selectPeriod.selectedIndex].value
  );
  return selectValue;
};

//=======>PERSON OBJESİ OLUŞTURUR<======
const personObject = () => {
  let registrationDate = new Date(); //kayıt tarihi
  let age = parseInt(ageInput.value);
  let value = calculatePeriod(); //üyenin aylık süresi

  //üyelik bitiş tarihi
  let endDate = new Date(
    registrationDate.getFullYear(),
    registrationDate.getMonth() + value,
    registrationDate.getDate()
  );

  //üye objesi
  return (person = {
    name: personName.value,
    surname: personSurname.value,
    age: age,
    email: personEmail.value,
    registerDate: registrationDate,
    endDate: endDate,
    period: value,
  });
};

//üye kayıt fonksiyonu
const memberRegistration = async () => {
  if (
    !personName.value ||
    !personSurname.value ||
    !ageInput.value ||
    !personEmail.value
  ) {
    //inputlar dolumu kontrol
    alert("Tüm Alanları Doldurduğunuzdan Emin Olun");
  } else {
    let person = personObject();
    if (isEdit) {
      await updateMember({...person,id:getIdFromQuery()});
    } else {
      await addMember(person);
    }
     window.location.href = "index.html";
  }
};
subButton.addEventListener("click", memberRegistration);
