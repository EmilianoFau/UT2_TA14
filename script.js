function anadirElemento() {
    const boton = document.getElementById("boton");
    const input = document.getElementById("input");
    const lista = document.getElementById("list");

    let valor = input.value;
    if (valor) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = valor;
        lista.appendChild(nuevoElemento);
        input.value = "";
    }
}