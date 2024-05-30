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
    document.getElementById("registerForm").addEventListener("submit", function(event){
        //evitar el enviado automatico del formulario
        event.preventDefault();

        //resetear mensaje de error
        resetErrorMessages();

        //validar campos
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let terms = document.getElementById("termsCheck").checked;
        let date = document.getElementById("date").value.trim();
        let nacionalidad = document.getElementById("nacionalidad");
        let isValid = true;

        if(username === ""){
            displayErrorMessage("userError", "Por favor ingresa un usuario.")
            isValid = false;
        }
        if(!isValidEmail(email)){
            displayErrorMessage("emailError", "Por favor ingresa un correo válido.")
            isValid = false;
        }
        if(password.length < 8){
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }
        if(date == ""){
            displayErrorMessage("dateError", "Ingresa una fecha de nacimiento valida");
            isValid = false;
        }
        if(nacionalidad.value === "0"){
            displayErrorMessage("nacionalidadError", "Ingresa una nacionalidad valida")
            isValid = false;
        }
        if (!terms) {
            displayErrorMessage("termsError", "Debe aceptar los términos y condiciones.");
            isValid = false;
        }
        if(isValid){
            alert("¡Formulario Enviado Correctamente!")
        }
    })
});

