
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
    getInput.value = parsedObject.email !== undefined ? getInput.value= parsedObject.email : "";
    getText.value = parsedObject.message !== undefined ? getText.value= parsedObject.message: "";

    // if (parsedObject.email !== undefined,
    //     parsedObject.message !==undefined
    //     ){
    //     getInput.value = parsedObject.email,
    //     getText.value = parsedObject.message
        
    // }else {
    // getInput.value=parsedObject.email;
    // getText.value= "";
// }
};

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


