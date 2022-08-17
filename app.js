// Variables
let textarea = document.querySelector("#texoingresado");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");
let resultado = document.querySelector("#resultado");
let copiar = document.querySelector("#copiar");
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
        resultado.className = "agregadoEncript";
        copiar.style.display = "initial";
        resultado.style.textAlign = "initial";
    }
});

// Evento desencriptar
botonDesencriptar.addEventListener("click", () => {
    let mensaje = textarea.value;
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/enter/g, "e");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ufat/g, "u");
    resultado.textContent = mensaje;
    resultado.textContent = arrayString;
    resultado.className = "agregadoEncript";
    copiar.style.display = "initial";
});

// Evento copiar
function copiarTexto() {
    navigator.clipboard.writeText(resultado.textContent);
}
