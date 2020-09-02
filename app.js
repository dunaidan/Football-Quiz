const pattern = /^[a-z]{3,}$/i;
//get all text inputs and save them into an array
const textInput = document.querySelectorAll('input[type="text"]');

//live check, the name and surname should contain 3 and more characters, only letters
textInput.forEach(item => {
 item.addEventListener('keyup', () => {
     console.log(item);
    if(pattern.test(item.value)){
        item.className = 'textSuccess';
    } else {
        item.className = 'textError';
    }
 });
});