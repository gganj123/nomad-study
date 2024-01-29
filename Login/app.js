const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector('a');

function onLoginClick(e){
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}


loginForm.addEventListener("submit",onLoginClick);