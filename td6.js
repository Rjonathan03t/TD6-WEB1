const form = document.getElementById("form");
const formulaire = document.getElementById("formulaire");
const register = document.getElementById("registerButton");
const xbutton = document.getElementById("buttonLeave");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;

formulaire.classList.add("lowOpacity");

xbutton.addEventListener("click", () => {
    xbutton.disabled = true;
    register.disabled = false;
    formulaire.classList.add("dontShow");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    setTimeout(() => {
        alert( firstName + " " + lastName + " registered")
        
    } ,1000);  
    
})
register.addEventListener("click", () => {
    register.disabled = true;
    xbutton.disabled = false;
    formulaire.classList.remove("lowOpacity");
    formulaire.classList.remove("dontShow");
})




