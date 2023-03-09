const heightField = document.querySelector('[name="height"]');
const weightField = document.querySelector('[name="weight"]');
const resultLabel = document.querySelector('#result-label');
const form = document.querySelector('.imc-form');

function getCondition(height, weight) {
    let imc = weight / (height * height);
    switch (true){
        case imc < 18.5 && imc > 0:
            return "Abaixo do Peso";
        case imc >= 18.5 && imc < 25:
            return "Peso Ideal";
        case imc >= 25 && imc < 30:
            return "Acima do Peso";
        case imc >= 30 && imc < 35:
            return "Obesidade Grau I";
        case imc >= 35 && imc < 40:
            return "Obesidade Grau II";
        case imc > 40:
            return "Obesidade Grau III"; 
        default:
            return "Valor Inválido";
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    let height = parseFloat(heightField.value);
    let weight = parseFloat(weightField.value);
    resultLabel.textContent = getCondition(height, weight);
}