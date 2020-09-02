const header = document.querySelector('H1');

//get all text inputs and save them into an array
const textInput = document.querySelectorAll('input[type="text"]');
const pattern = /^[a-z]{3,}$/i;

//correct answers
const correctAnswers = ['own', 'ramos', 'beks', 'pass', 'mbappe', 'longpass', 'rakitic', 'henrikh', 'paulo', 'alaba'];
const submit = document.querySelector('form');

//live check, the name and surname should contain 3 and more characters, only letters
textInput.forEach(item => {
 item.addEventListener('keyup', () => {
    if(pattern.test(item.value)){
        item.className = 'textSuccess';
    } else {
        item.className = 'textError';
    }
 });
});

//check the answers after submit button was pressed
submit.addEventListener('submit', e => {
    //prevent page reload
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const surname = document.querySelector('input[name="surname"]').value;
    const error = document.querySelector('p.error');
    error.style.display = "none";

    const userAnswers = document.querySelectorAll('input[type="radio"]:checked');

    if(!pattern.test(name) || !pattern.test(surname)){
        scrollTo(0, 0); 
        error.style.display = "block";
        console.log('return');
        return;
    }

    let i = 0;
    let result = 0;
    const weight = 100/correctAnswers.length;

    userAnswers.forEach(answer => {
        if(answer.value === correctAnswers[i]){
            result += weight;
            document.querySelector(`label[for="${correctAnswers[i]}"]`).className = 'right';
        } else {
            //color the right and the wrong answer
            document.querySelector(`label[for="${correctAnswers[i]}"]`).className = 'right';
            document.querySelector(`label[for="${answer.value}"]`).className = 'wrong';
        }
        i++;
    });

    scrollTo(0, 0);
    //show the result on the page with score animation
    let output = 0;
    const timer = setInterval(() =>{
        header.innerHTML = `Hi, ${name} ${surname} <br> You are ${output}% football expert!`;
        if(output === result) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 20);
    
});