

const getInput = document.querySelector(`input`);
const getText = document.querySelector(`textarea`);

const object = {
    getInput,
    getText
};

getInput.addEventListener(`input`, (event)=>{
    console.log(event.currentTarget.value);
    localStorage.setItem("feedback-form-state", event.currentTarget.value)
})


const getForm = document.querySelector(`form`);

const theme = localStorage.getItem("feedback-form-state");
getInput.value = getInput.value + `${theme}`

console.log(theme);

getForm.addEventListener(`submit`, (event)=>{
    localStorage.clear(" ");
    
    
});