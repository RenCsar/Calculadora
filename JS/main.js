const previa = document.querySelector("#previa");
const corrente = document.querySelector("#corrente");
const buttons = document.querySelectorAll("#botoes-container button");


class calculadora {

}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if(+value >= 0 || value === "."){
     console.log(value); 
    } else {
      console.log(`Operação: ${value}`);
    };
  })
});