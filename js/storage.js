let personName = document.getElementById("personName");
let personSurname = document.getElementById("personSurname");
let ageInput = document.getElementById("ageInput");
let personEmail = document.getElementById("personEmail")
let subButton = document.getElementById("subButton");

let person = [];


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
    uyelıkSuresı:value,
  });
};

//üye kayıt fonksiyonu
const memberRegistration = () => {
  if(!personName.value || !personSurname.value || !ageInput.value || !personEmail.value){//inputlar dolumu kontrol
    alert("Tüm Alanları Doldurduğunuzdan Emin Olun");
  }
  else{
    let person = personObject();
    addStorage(person);
    window.location.href="index.html"
  }

};
subButton.addEventListener('click',memberRegistration)