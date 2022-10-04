
import throttle from 'lodash.throttle';

const getInput = document.querySelector(`input`);
const getText = document.querySelector(`textarea`);


const object = {};

const getForm = document.querySelector(`form`);
// 
getForm.addEventListener(`input`, throttle(onInput, 500));

function onInput(event){
    object[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object))
    
};



const getObject = localStorage.getItem("feedback-form-state");
const parsedObject = JSON.parse(getObject);

function setValue(){
    if (parsedObject.email.length == 0,
        parsedObject.message.length == 0){
        getInput.value = "",
        getText.value = ""
    }else {
    getInput.value = parsedObject.email,
    getText.value = parsedObject.message
}};

setValue();

function clearValue(){
    getInput.value = "";
    getText.value = "";
}


getForm.addEventListener(`submit`, (event)=>{
    event.preventDefault();
    console.log(parsedObject);
    localStorage.clear();    
    clearValue();

});


