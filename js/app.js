// const loginForm = document.getElementById("login-form");   //HTML element이다. querySelector라면 ID이므로 #을 붙여주어야 한다.
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value; 
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
    
}


  
   function paintGreetings(username){
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

   }

  


// localStorage란 정보를 저장하고 불러오고 삭제하는 작은DB같은 API이다.
    const saveUsername = localStorage.getItem(USERNAME_KEY);

    if(saveUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(saveUsername);
        
        // show the greetings
    }



