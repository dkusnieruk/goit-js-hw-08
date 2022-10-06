
import throttle from 'lodash.throttle';

const getInput = document.querySelector(`input`);
const getText = document.querySelector(`textarea`);

const object = {
    email: ``,
    message: `` 
    
};


const getForm = document.querySelector(`form`);

getInput.addEventListener(`input`, throttle(onInput, 500));
getText.addEventListener(`input`,throttle(onInput2,500));

function onInput2(event){
    object.message=event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object))
    console.log(object);
    

};

function onInput(event){
    object.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object))
    console.log(object);
    
};

const getObject = localStorage.getItem("feedback-form-state");
const parsedObject = JSON.parse(getObject);

function setValue(){
    getInput.value = parsedObject.email !== undefined ? getInput.value= parsedObject.email : "";
    getText.value = parsedObject.message !== undefined ? getText.value= parsedObject.message: "";

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
    parsedObject.clear;


});


