document.addEventListener("DOMContentLoaded", function() {
    var form = document.forms["form"];
    form.addEventListener("submit", function(event) {
        var nombre = form["nombre"].value.trim();
        var email = form["email"].value.trim();
        var asunto = form["asunto"].value.trim();
        var mensaje = form["mensaje"].value.trim();

        if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
        }
    });
});
