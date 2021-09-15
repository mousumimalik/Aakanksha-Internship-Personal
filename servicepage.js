// Explore employee
// login and signup

const loginBtn = document.querySelector(".login");
const signUpBtn = document.querySelector(".sign-up");
const modal = document.querySelector(".modal");
const login = document.querySelector(".login-modal");
const signup = document.querySelector(".signup-modal");
const backdrop = document.querySelector(".backdrop");
let container = document.querySelector("#container");
let height = container.getBoundingClientRect().height;

let loginClicked = false;
let signUpClicked = false;

loginBtn.addEventListener('click', function(){
    loginClicked = true;
    signUpClicked = false;
    showModal();
})

signUpBtn.addEventListener('click', function(){
    signUpClicked = true;
    loginClicked = false;
    showModal();
})

function showModal(){
    let modalHide = modal.classList.contains('hide');
    let loginHide = login.classList.contains("hide");
    let signUpHide = signup.classList.contains("hide");
    
    let navbar = document.querySelector(".navbar");
    let top = navbar.getBoundingClientRect().height;
    height = height - top;
    backdrop.style.height = `${height}px`;

    if(modalHide && loginClicked){
        signup.classList.add("hide");
        modal.classList.remove('hide');
        login.classList.remove("hide");
        backdrop.classList.remove("hide");
    }else if(modalHide && signUpClicked){
        login.classList.add("hide");
        modal.classList.remove('hide');
        signup.classList.remove("hide");
        backdrop.classList.remove("hide");
    }else{
        if(loginClicked){
            if(!loginHide){
                modal.classList.add('hide');
                login.classList.add("hide");
                signup.classList.add("hide");
                backdrop.classList.add("hide");

            }else{
                signup.classList.add("hide");
                login.classList.remove("hide");
            }

        }else if(signUpClicked){
            if(!signUpHide){
                modal.classList.add('hide');
                login.classList.add("hide");
                signup.classList.add("hide");
                backdrop.classList.add("hide");
            }else{
                login.classList.add("hide");
                signup.classList.remove("hide");
            }
        }else{
        }
    }
}

backdrop.addEventListener("click", function(){
    if(!backdrop.classList.contains("hide")){
        backdrop.classList.add('hide');
        modal.classList.add('hide');
    }
})