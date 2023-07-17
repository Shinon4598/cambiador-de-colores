let colorActual = document.getElementById("color-actual");
let texto = "Background Color: ";
let colores = ["blue", "yellow", "red", "blue", "purple", "green", "orange", "pink", "brown"]; // 8
function cambiarColor() {
    let numeroAleatorio = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[numeroAleatorio];
    colorActual.textContent= texto + colores[numeroAleatorio];
}