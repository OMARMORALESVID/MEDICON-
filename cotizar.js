// Obtén una referencia al botón "Cotizar"
const cotizarButton = document.getElementById("cotizar-button");

// Agrega un controlador de eventos para el clic en el botón "Cotizar"
cotizarButton.addEventListener("click", function () {
    // Obtén una referencia al formulario
    const formulario = document.getElementById("formulario-cotizacion");

    // Obtén una referencia al contenedor de productos en el carrito
    const contenedorCarrito = document.querySelector(".contenedor-carrito");

    // Obtiene todos los elementos que representan productos en el carrito
    const productosCarrito = contenedorCarrito.querySelectorAll(".producto-en-carrito");

    // Recorre los productos en el carrito y agrégalos al formulario
    productosCarrito.forEach((producto, index) => {
        // Obtén información del producto desde el elemento del carrito
        const nombreProducto = producto.querySelector(".nombre-producto-en-carrito").textContent;
        const cantidad = producto.querySelector(".cantidad-producto-en-carrito").textContent;

        // Crea un nuevo elemento de lista (li) para el producto en el formulario
        const listItem = document.createElement("li");
        listItem.textContent = `${nombreProducto}: `;
        
        // Crea un campo de entrada para la cantidad y configura su nombre y valor
        const cantidadInput = document.createElement("input");
        cantidadInput.type = "text";
        cantidadInput.name = `producto_${index + 1}_cantidad`;
        cantidadInput.value = cantidad;
        cantidadInput.required = true;

        // Agrega el campo de entrada al elemento de lista
        listItem.appendChild(cantidadInput);

        // Agrega el elemento de lista al formulario
        formulario.querySelector("ul").appendChild(listItem);
    });
});
