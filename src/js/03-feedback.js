import throttle from 'lodash.throttle';

const getInput = document.querySelector(`input`);
const getText = document.querySelector(`textarea`);

const object = {};

const getForm = document.querySelector(`form`);

getForm.addEventListener(`input`, throttle(onInput, 500));

function onInput(event){
    object[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object))
};

getObject = localStorage.getItem("feedback-form-state");

parsedObject = JSON.parse(getObject);

function setValue(){
    getInput.value = parsedObject.email;
    getText.value = parsedObject.message;
};

function clearValue(){
    getInput.value = "";
    getText.value = "";
}
setValue();
console.log(getObject);
console.log(parsedObject);

getForm.addEventListener(`submit`, (event)=>{
    console.log(parsedObject);
    event.preventDefault();
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