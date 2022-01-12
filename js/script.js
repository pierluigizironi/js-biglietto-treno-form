console.log('JS OK')

const fullName = document.getElementById('fullname');
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const carrozza = document.getElementById('carrozza');

const coach = Math.floor(Math.random() * 10);
console.log(coach)

buttonElement.addEventListener('click', function () {

    const inputValue = inputElement.value; 
    console.log(inputValue);
    
    if (inputValue) {
    fullName.innerHTML = `Nome Passeggero: <strong>${inputValue}</strong>`;
    carrozza.innerHTML = `Numero carrozza: <strong>${coach}</strong>`;
    }
    });