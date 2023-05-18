function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var termCon = document.getElementById("termCon").value;
    var errorDiv = document.getElementById("errorDiv");
    

    if (name === "" || email === "" || termCon === "") {
        errorDiv.textContent = "Por favor, complete los campos.";
        return false;
    }

    errorDiv.textContent = "";
    alert("¡Formulario enviado correctamente!");
    return true;
}