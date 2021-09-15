// index.html

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}

// setFormMessage(loginForm, "success", "You're logged in!");
function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#link-create-account").addEventListener("click", (e) =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        signupForm.classList.remove("form-hidden");
    });

    document.querySelector("#link-login-account").addEventListener("click", (e) =>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in lenght");
            }
        });

        inputElement.addEventListener("input", e =>{
            clearInputError(inputElement);
        });

    });

});



// service page trigger

const cards = document.querySelectorAll(".mini-card");
const link = document.querySelector(".service-page-link");

cards.forEach(function(card){
    card.addEventListener("click", function(){
        link.click();
    });
})

// featured employee service page trigger click

const empCards = document.querySelectorAll(".card-link");
empCards.forEach(function(empCard){
    empCard.addEventListener("click", function(){
        link.click();
    })
})


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

// sliders and changing text

const img = document.querySelectorAll(".slide-img");
const bar = document.querySelectorAll('.bar');

const changingText = document.querySelector("#changing-text");

let idx = 1;
window.addEventListener("load", function(){
    slider();
    changeText();
});

function slider(){
   for(let i = 0; i < img.length; i++){
       img[i].style.display = "none";
   }
   img[idx % img.length].style.display = "block";
   bar[(idx - 1) % img.length].className ="bar";
   bar[idx % img.length].className ="bar active";
    idx++;
    setTimeout(slider, 2000);
}


const textArr = ["CARPENTER", "ELECTRICIAN", "PLUMBER", "TURIST GUIDE", "COOK", "LAUNDRY", "TECHNICIAN"];

let index = 0;
let word = textArr[index];
let text = "";
let isDeleting = false;

function changeText(){

    if(isDeleting && text.length == 0){
        index = (index + 1) % textArr.length;
        word = textArr[index];
        isDeleting = false;
    }

    if(text.length == word.length){
        isDeleting = true;
    }

    text = isDeleting ? word.substring(0,text.length - 1) : word.substring(0,text.length + 1) ;
    changingText.innerHTML = text;
    setTimeout(changeText, text.length == word.length ? 1000 : 200);
}

// back to top
const backToTop = document.querySelector('.top');
window.addEventListener("scroll", function(e){
    let topHeight = e.target.scrollingElement.scrollTop + window.innerHeight - 70;
    if(e.target.scrollingElement.scrollTop >= 1000){
        backToTop.classList.remove("hide");
        backToTop.style.top = `${topHeight}px`;
    }else{
        backToTop.classList.add("hide");
    }
});

backToTop.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});




