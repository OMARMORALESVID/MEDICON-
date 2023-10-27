function enviarCotizacion(cotizacion) {
    // Crea un objeto FormData con los valores de la cotización
    const formData = new FormData();
    for (const key in cotizacion) {
      formData.append(key, cotizacion[key]);
    }
  
    // Envía la cotización por correo electrónico utilizando Gmail
    fetch("https://script.google.com/macros/s/AKfycbyvJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJ/exec", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Cotización enviada con éxito");
          cotizacionForm.reset();
        } else {
          alert("Error al enviar la cotización");
        }
      })
      .catch((error) => {
        alert("Error al enviar la cotización");
        console.error(error);
      });
  }