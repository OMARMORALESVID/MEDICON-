const cotizacionForm = document.getElementById("cotizacion-form");

cotizacionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtiene los valores de los campos del formulario
  const nombreEmpresa = document.getElementById("nombre-empresa").value;
  const ruc = document.getElementById("ruc").value;
  const nombreSolicitante = document.getElementById("nombre-solicitante").value;
  const proveedor = document.getElementById("proveedor").value;
  const logistica = document.getElementById("logistica").checked;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const productos = document.getElementById("productos").selectedOptions;

  // Crea un objeto con los valores del formulario
  const cotizacion = {
    nombreEmpresa,
    ruc,
    nombreSolicitante,
    proveedor,
    logistica,
    telefono,
    correo,
    productos: Array.from(productos).map((option) => option.value),
  };

  // Envía la cotización por correo electrónico
  enviarCotizacion(cotizacion);
});