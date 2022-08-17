// Variables
let textarea = document.querySelector("#texoingresado");
let botonEncriptar = document.querySelector("#encriptar");
let resultado = document.querySelector("#resultado");
// Evento encriptar
botonEncriptar.addEventListener("click", () => {
    let mensaje = textarea.value;
    let i = 0;
    if (mensaje !== "") {
        let arrayMensaje = mensaje.split("");
        arrayMensaje.forEach((element) => {
            if (element === "a") {
                arrayMensaje[i] = "ai";
            }
            if (element === "e") {
                arrayMensaje[i] = "enter";
            }
            if (element === "i") {
                arrayMensaje[i] = "imes";
            }
            if (element === "o") {
                arrayMensaje[i] = "ober";
            }
            if (element === "u") {
                arrayMensaje[i] = "ufat";
            }
            i++;
        });
        let arrayString = arrayMensaje.toString().replace(/,/g, "");
        resultado.textContent = arrayString;
    } else {
        alert("ESCRIBE HDP");
        window.location.reload();
    }
});
