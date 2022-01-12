console.log('JS OK')

const fullName = document.getElementById('fullname');
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');

buttonElement.addEventListener('click', function () {

    const inputValue = inputElement.value; 
    console.log(inputValue);
    
    if (inputValue) {
    fullName.innerHTML = `Ciao, <strong>${inputValue}</strong>`;
    }
    });