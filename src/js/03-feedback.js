

import throttle from 'lodash.throttle';

const getInput = document.querySelector(`input`);
const getText = document.querySelector(`textarea`);

const object = {};

const getForm = document.querySelector(`form`);

getForm.addEventListener(`input`, throttle(onInput, 500));

function onInput(event){
    object[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object))
    console.log(object)

    const parsObject = JSON.parse(localStorage.getItem("feedback-form-state"))
    getInput.value=parsObject.email;
    getForm.value=parsObject.message;
    
};



const getObject = localStorage.getItem("feedback-form-state");
console.log(getObject);
const parsedObject = JSON.parse(getObject);
console.log(parsedObject);

function setValue(){
    
    getInput.value = parsedObject.email;
    getText.value = parsedObject.message;
};

setValue();


function clearValue(){
    getInput.value = "";
    getText.value = "";
}

getForm.addEventListener(`submit`, (event)=>{
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
    clearValue();

});



// getInput.addEventListener(`input`, (event)=>{
//     console.log(event.currentTarget.value);
//     localStorage.setItem("feedback-form-state", event.currentTarget.value)
// })


// const getForm = document.querySelector(`form`);

// const theme = localStorage.getItem("feedback-form-state");
// getInput.value = getInput.value + `${theme}`

// console.log(theme);

// getForm.addEventListener(`submit`, (event)=>{
//     localStorage.clear();
    
    
// });