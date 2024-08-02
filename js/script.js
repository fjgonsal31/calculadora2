// calculadora 2
function calcularPrecio() {
    let nombre = document.getElementById("producto").value;
    let precio = Number(document.getElementById("precio").value);
    let checkbox = document.getElementById("checkbox").checked;
    let iva = 21;

    if (checkbox == true) {
        iva = 10;
    }

    let precioTotal = (precio * iva / 100) + precio;
    let mensaje = `El precio del producto ${nombre} es ${precio}€ sin IVA y de ${precioTotal}€ IVA incluído.`;

    document.getElementById("resultado2").textContent = mensaje;
}