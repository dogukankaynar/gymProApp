import {getDataUi} from "./ui.js"
let regirsterButton = document.getElementById('regirsterButton')



const startStroge = () => {
  const data = localStorage.getItem("myData");
  if (!data) {
    localStorage.setItem("myData", JSON.stringify([]));
  }
};
 startStroge();

const registerPageHref = ()=>{
  window.location.href="register.html"
}

function eventListener() {
   window.onload= getDataUi;
  regirsterButton.addEventListener('click',registerPageHref)
 
}

 eventListener();
