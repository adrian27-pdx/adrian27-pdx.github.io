let form = document.querySelector('form'); //Finds the form element.

form.addEventListener('submit', handleSubmit); //Add a listener for when the submit butten is used.

//A funciton that executes when the submit butten is used.
function handleSubmit(event){
    alert("Your responce has been submitted!"); //Alert that pops up letting the user know they submitted the form.
}