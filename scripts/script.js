var resultado = document.getElementById("result").value;

function fillIn(valueButton) {
  var aux = document.getElementById("result").value;
  if (aux === "0") {
    document.getElementById("result").value = valueButton;
  } else {
    document.getElementById("result").value = aux + valueButton;
  }
}

//Función para limpiar el resultado
function clearNumbers() {
  document.getElementById("result").value = 0;
}

//Función para borar digito por digito
function deleteNumbers() {
  var resultElement = document.getElementById("result");
  var del = resultElement.value;

  //Borrar el ultimo digito
  if (del.length > 0) {
    resultElement.value = del.substr(0, del.length - 1);
  }

  //Si no queda ningun número, establecer el valor a 0
  if (resultElement.value.length === 0) {
    resultElement.value = 0;
  }
}

function point() {
  document.getElementById("result").value += ".";
}

// Funçión para alterar un número positivo ou negativo
function maisMenos() {
  if (document.getElementById("result").value == "") {
    document.getElementById("result").value = "-";
  } else {
    document.getElementById("result").value = "";
  }
}

function calculate() {
  const calculateResult = eval(document.getElementById("result").value);
  document.getElementById("result").value = calculateResult;
}

function porcentagem() {
  valor2 = parseFloat(document.getElementById("result").value);
  if (operador == "*") {
    resultado = (valor1 / 100) * valor2;
  }
  document.getElementById("result").value = resultado;
}
