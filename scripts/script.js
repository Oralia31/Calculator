var resultado = document.getElementById('result').value;

function fillIn(valueButton) {
    var aux = document.getElementById("result").value;
    if (aux === '0') {
        document.getElementById("result").value = valueButton
    } else {
        document.getElementById("result").value = aux + valueButton;
    }

}

//Función para limpiar el resultado
function clearNumbers() {
    document.getElementById("result").value = 0;
}

// Función para borar digito por digito
function deleteNumbers() {
    var del = document.getElementById("result").value;
    document.getElementById("result").value = del.length;
    document.getElementById("result").value = del.substr(0, del.length - 1);
}


function point() {
    document.getElementById("result").value += ".";
}

// Função para alterar para número positivo ou negativo
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
