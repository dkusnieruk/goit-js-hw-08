
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
};



const getObject = localStorage.getItem("feedback-form-state");
const parsedObject = JSON.parse(getObject);

function setValue(){
    if (parsedObject.email === undefined, 
        parsedObject.message=== undefined){
        getInput.value = "",
        getText.value = ""
    }else {
    getInput.value = parsedObject.email;
    getText.value = parsedObject.message;
}};

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


