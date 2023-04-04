let personName = document.getElementById("personName");
let personSurname = document.getElementById("personSurname");
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
    name: personName.value,
    surname: personSurname.value,
    kayıtTarihi: registrationDate,
    sonGün: endDate,
  });
};

//üye kayıt fonksiyonu
const memberRegistration = () => {
  let person = personObject();
  addStorage(person);

  console.log("storage js çalıstı");
};

export { memberRegistration };
