const previa = document.querySelector("#previa");
const corrente = document.querySelector("#corrente");
const buttons = document.querySelectorAll("#botoes-container button");


class calculator {
  constructor(previa, corrente) {
    this.previa = previa;
    this.corrente = corrente;
    this.correnteOperacao = "";
  }

  //Adiciona um dígito a tela da calculadora
  addDigit(digit) {

    //Checar se a operação já tem um ponto
    if(digit === "." && this.corrente.innerText.includes(".")){
      return;
    }

    this.correnteOperacao = digit;
    this.updateScreen();
  };

  //Processa todas as operações da calculadora
  processOperation(operation) {
    
    //Checar se o corrente está vazio
    if(this.corrente.innerText === ""){
      //Mudar Operação
      if(this.previa.innerText !== ""){
        this.changeOperation(operation);

      }
      return;
    };



    //Pegar corrente e os valores da previa
    let operationValue;
    const previous = +this.previa.innerText.split(" ")[0];
    const current = +this.corrente.innerText;

    switch(operation) {
      case "+": 
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-": 
        operationValue = previous - current
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/": 
        operationValue = previous / current
        this.updateScreen(operationValue, operation, current, previous);
        break;     
      case "*": 
        operationValue = previous * current
        this.updateScreen(operationValue, operation, current, previous);
        break;  
      default:
        return;  
    }
  };



  //Muda os valores da tela da calculadora
  updateScreen(
    operationValue = null, 
    operation = null,
    current = null, 
    previous = null
    ) {
    
    if(operationValue === null) {
      this.corrente.innerText += this.correnteOperacao;
    } else {
      //Checar se o valor é zer, se for apenas adiciono o valor corrente
      if(previous === 0) {
        operationValue = current;
      }

      //Adicionar valor para a previa
      this.previa.innerText = `${operationValue} ${operation}`;
      this.corrente.innerText = "";
    }
  };

  //Mudar operação matemática
  changeOperation(operation) {
    const mathOperations = ["*", "/", "+", "-"];

    if(!mathOperations.includes(operation)) {
      return;
    }

    this.previa.innerText = this.previa.innerText.slice(0, -1) + operation 
  };

}

const calc = new calculator(previa, corrente);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if(+value >= 0 || value === "."){
     calc.addDigit(value); 
    } else {
      calc.processOperation(value);
    };
  })
});