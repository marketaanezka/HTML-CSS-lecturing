console.log(validator.isEmail("test@mail.com"));

const msgElm = document.querySelector("#msg");
console.log(msgElm);

const userEmail = prompt("Zadej svůj e-mail:");
console.log(userEmail); 

if (validator.isEmail(userEmail)) {
  msgElm.textContent = "E-mail v pořádku";
  msgElm.classList.add("msg--valid")
} else {
  msgElm.textContent = "Neplatný e-mail";
  msgElm.classList.add("msg--invalid")
}
