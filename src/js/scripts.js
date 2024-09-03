let sliderElement = document.querySelector('#slide');
const buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

const containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!."
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slide.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    
    let pass = '';

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ));
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    alert('Senha copiada!')
    navigator.clipboard.writeText(novaSenha);
}