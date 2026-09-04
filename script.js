// Seleccionamos la pantalla de la calculadora
const pantalla = document.getElementById("pantalla");

// Agrega números u operadores a la pantalla
function agregar(valor) {
    // Si anteriormente apareció un error, empezamos de nuevo
    if (pantalla.value === "Error") {
        pantalla.value = "";
    }

    pantalla.value += valor;
}

// Borra todo el contenido de la pantalla
function limpiar() {
    pantalla.value = "";
}

// Borra solamente el último carácter ingresado
function borrar() {
    if (pantalla.value === "Error") {
        pantalla.value = "";
    } else {
        pantalla.value = pantalla.value.slice(0, -1);
    }
}

// Resuelve las operaciones básicas:
// suma, resta, multiplicación y división
function calcular() {
    try {
        // Evita intentar calcular si la pantalla está vacía
        if (pantalla.value === "") {
            return;
        }

        let resultado = eval(pantalla.value);

        // Verificamos que el resultado sea válido
        if (!isFinite(resultado)) {
            pantalla.value = "Error";
        } else {
            pantalla.value = resultado;
        }

    } catch (error) {
        pantalla.value = "Error";
    }
}

// Calcula la raíz cuadrada del número
function raiz() {
    try {
        if (pantalla.value === "") {
            return;
        }

        let numero = eval(pantalla.value);

        // No permitimos raíz cuadrada de números negativos
        if (numero < 0 || !isFinite(numero)) {
            pantalla.value = "Error";
            return;
        }

        let resultado = Math.sqrt(numero);

        pantalla.value = resultado;

    } catch (error) {
        pantalla.value = "Error";
    }
}

// Eleva el número al cuadrado
function potencia() {
    try {
        if (pantalla.value === "") {
            return;
        }

        let numero = eval(pantalla.value);

        let resultado = Math.pow(numero, 2);

        if (!isFinite(resultado)) {
            pantalla.value = "Error";
        } else {
            pantalla.value = resultado;
        }

    } catch (error) {
        pantalla.value = "Error";
    }
}

// Permite usar algunas teclas del teclado
document.addEventListener("keydown", function(event) {

    // Números
    if (event.key >= "0" && event.key <= "9") {
        agregar(event.key);
    }

    // Operaciones básicas
    else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {
        agregar(event.key);
    }

    // Punto decimal
    else if (event.key === ".") {
        agregar(".");
    }

    // Enter realiza el cálculo
    else if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }

    // Backspace borra el último carácter
    else if (event.key === "Backspace") {
        borrar();
    }

    // Escape limpia toda la calculadora
    else if (event.key === "Escape") {
        limpiar();
    }
});
