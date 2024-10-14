var frstNameInput = document.querySelector('#fname');
var lstNameInput = document.querySelector('#lName');
var emailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phone');
var countrySelect = document.querySelector('#countrySelect');
var adressInput = document.querySelector('#adress');
var subjectInput = document.querySelector('#subject');
var submitBtn = document.querySelector('#buttonDiv');



function validateCharString(input){
    var value = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    if (value === ''){
        console.log('This field is required');
        input.style.cssText = 'border: 2px solid red';
        input.style.backgroundColor = 'red';
    } else {
        if (!namePattern.test(value)){
            console.log('Special characters or numbers not allowed');
            input.style.cssText = 'border: 2px solid red';
        } else{
            console.log('All good');
            input.style.cssText = 'border: 2px solid green';
            input.style.backgroundColor = 'green';
        }
    }
}

function validateNumbrString(input){
    var valueNumb = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    if(!/^[0-9\s]*$/.test(valueNumb)){
        console.log("Please only enter numeric characters only for your phone! (Allowed input:0-9)");
        input.style.cssText = 'border: 2px solid red';
    }
      else {
        console.log(`${valueNumb}`);
        input.style.cssText = 'border: 2px solid green';
        input.style.backgroundColor = 'green';
      }
}


function validateEmail(input){
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(emailRegex)) {
    console.log("Valid email address!");
    input.style.cssText = 'border: 2px solid green';
    input.style.backgroundColor = 'green';
  } else {
    console.log('Please enter a vaild email address');
    input.style.cssText = 'border: 2px solid red';
    input.style.backgroundColor = 'red';
  }
}



//window.addEventListener('',);
frstNameInput.addEventListener('input',() => {
    validateCharString(frstNameInput);
});
lstNameInput.addEventListener('input',() => {
    validateCharString(lstNameInput);
});

phoneInput.addEventListener('input',() => {
    validateNumbrString(phoneInput);
});

emailInput.addEventListener('input',() => {
    validateEmail(emailInput);
});