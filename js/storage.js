let personName = document.getElementById("personName");
let personSurname = document.getElementById("personSurname");
let ageInput = document.getElementById("ageInput");
let personEmail = document.getElementById("personEmail")

let person = [];
const startStroge = () => {
  const data = localStorage.getItem("myData");
  if (!data) {
    localStorage.setItem("myData", JSON.stringify([]));
  }
  console.log("çalıstım");
};
startStroge();

// localStorage' e üye Ekler
const addStorage = (person) => {
  const data = JSON.parse(localStorage.getItem("myData"));
  data.push(person);
  localStorage.setItem("myData", JSON.stringify(data));
};

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
  let id = registrationDate.getTime(); //üye id
  let age = parseInt(ageInput.value);
  let value = calculatePeriod(); //üyenin aylık süresi
  console.log(value);

  //üyelik bitiş tarihi
  let endDate = new Date(
    registrationDate.getFullYear(),
    registrationDate.getMonth() + value,
    registrationDate.getDate()
  );

  //üye objesi
  return (person = {
    id: id,
    name: `${personName.value} ${personSurname.value}`,
    age: age,
    email:personEmail.value,
    kayıtTarihi: registrationDate,
    sonGün: endDate,
  });
};

//üye kayıt fonksiyonu
const memberRegistration = () => {
  let person = personObject();
  addStorage(person);
  window.location.href="index.html"
  console.log("storage js çalıstı");
};

export { memberRegistration };
