const previa = document.querySelector("#previa");
const corrente = document.querySelector("#corrente");
const buttons = document.querySelectorAll("#botoes-container button");


buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    console.log(value);
  })
});