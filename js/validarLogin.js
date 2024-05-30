function isValidEmail(email){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages(){
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element){
        element.innerText = "";
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("loginForm").addEventListener("submit", function(event){
        //evitar el enviado automatico del formulario
        event.preventDefault();

        //resetear mensaje de error
        resetErrorMessages();

        //validar campos
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if(!isValidEmail(email)){
            displayErrorMessage("emailError", "Por favor ingresa un correo válido.")
            isValid = false;
        }
        if(password.length < 8){
            displayErrorMessage("passwordError", "Contraseña incorrecta");
            isValid = false;
        }
        if(isValid){
            alert("¡Iniciaste sesion con exito!")
        }
    })
});