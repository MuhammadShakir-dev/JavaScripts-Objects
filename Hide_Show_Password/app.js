let password = document.querySelector('#password');
let eyeIcon = document.querySelector('#eyeIcon');


eyeIcon.addEventListener('click', () => { 
    if (password.type == 'password') {
        password.type = 'text'
        eyeIcon.src = './Images/eye.png'
    } else { 
        password.type = 'password'
        eyeIcon.src = './Images/hidden.png'
    }

})