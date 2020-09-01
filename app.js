const name = document.querySelector('input[name="name"]');
const pattern = /^[a-z][A-Z]&/;

//live check, the name should contain 3 and more characters, only letters
name.addEventListener('keyup', () => {
    console.log(pattern.test(name));
});