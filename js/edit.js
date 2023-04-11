import{getMemberById,updateMember} from "./personService.js"

let isEdit =false;

console.log("edit page calıstı");
const getIdFromQuery = () => {
  const href = window.location.href;
  const url = new URL(href);
  const id = url.searchParams.get("id") || null;
  return id;
};
const memberEditUi = (member) => {
     document.getElementById("personName").value =member.name;
     document.getElementById("personSurname").value =member.surname;
     document.getElementById("ageInput").value =member.age;
     document.getElementById("personEmail").value =member.email;

  document.getElementById("title").innerHTML="Edit Members";
  console.log("memberName çalıstı");
};

const getCurrentMember = async () => {
  const id = getIdFromQuery();
  if (id) {
    isEdit=true;
    const member = await getMemberById(id);
    memberEditUi(member);
  }

};
getCurrentMember();
export {isEdit,getIdFromQuery}