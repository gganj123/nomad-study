const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting =document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";

function onLoginClick(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    paintGreetings(username);
}   

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

loginForm.addEventListener("submit",onLoginClick);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginClick);
}else {
    paintGreetings(savedUsername);
    greeting.classList.add("showing")
}

