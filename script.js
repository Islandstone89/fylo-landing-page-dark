
let form = document.querySelector(".cta__form");
let emailInput = document.querySelector(".email-input");
let errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (emailInput.value === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "This field cannot be empty";
    }
    else if (emailInput.value.indexOf("@") === -1) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a valid email address";
    }
    else {
        errorMessage.style.display = "block";
        errorMessage.style.color = "#38f276";
        errorMessage.textContent = "Success!";
    }
})