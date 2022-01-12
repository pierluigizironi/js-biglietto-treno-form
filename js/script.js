console.log('JS OK')

const fullName = document.getElementById('fullname');
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const carrozza = document.getElementById('carrozza');
const ticketCode = document.getElementById('cpcode');


const coach = Math.floor(Math.random() * 10);
console.log(coach)
const ticketNumber =  Math.floor(Math.random() * 9000) + 1000
console.log(ticketNumber)


buttonElement.addEventListener('click', function () {

    const inputValue = inputElement.value; 
    console.log(inputValue);
    
    if (inputValue) {
    fullName.innerHTML = `Nome Passeggero: <strong>${inputValue}</strong>`;
    carrozza.innerHTML = `Numero carrozza: <strong>${coach}</strong>`;
    ticketCode.innerHTML = `Codice CP: <strong>${ticketNumber}</strong>`;
    inputElement.value = ''
    }
    });