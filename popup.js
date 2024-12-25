// Definir los datos directamente en el código JavaScript
const popupData = {
  "visible": true,
  "title": "¡Bienvenido!",
  "message": "Este es un mensaje emergente de prueba.",
  "closeButtonText": "Cerrar",
  "overlayBackgroundColor": "rgba(0, 0, 0, 0.7)",
  "popupBackgroundColor": "#fff",
  "textColor": "#000",
  "popupTextColor": "#333",
  "backgroundColor": "#f00",
  "closetextColor": "#fff"
};

// Función para cargar y mostrar el pop-up
function loadPopup() {
  try {
    // Solo mostrar si el pop-up es visible
    if (popupData.visible) {
      // Crear el pop-up y añadir el contenido
      const popupOverlay = document.createElement("div");
      popupOverlay.classList.add("popup-overlay");
      popupOverlay.id = "popup-overlay";

      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.id = "popup";

      const title = document.createElement("h2");
      title.id = "popup-title";
      title.textContent = popupData.title;

      const message = document.createElement("p");
      message.id = "popup-message";
      message.textContent = popupData.message;

      const closeButton = document.createElement("button");
      closeButton.id = "popup-close";
      closeButton.textContent = popupData.closeButtonText;

      popup.appendChild(title);
      popup.appendChild(message);
      popup.appendChild(closeButton);
      popupOverlay.appendChild(popup);

      // Insertar el pop-up en el body
      document.body.appendChild(popupOverlay);

      // Aplicar los estilos dinámicos desde los datos
      document.getElementById("popup-overlay").style.backgroundColor =
        popupData.overlayBackgroundColor;
      document.getElementById("popup").style.backgroundColor =
        popupData.popupBackgroundColor;
      document.getElementById("popup-title").style.color = popupData.textColor;
      document.getElementById("popup-message").style.color =
        popupData.popupTextColor;
      document.getElementById("popup-close").style.backgroundColor =
        popupData.backgroundColor;
      document.getElementById("popup-close").style.color = popupData.closetextColor;

      // Mostrar el pop-up
      popupOverlay.style.display = "flex";
    }
  } catch (error) {
    console.error("Error al cargar el pop-up:", error);
  }
}

// Función para cerrar el pop-up con animación
document.addEventListener("click", (event) => {
  if (event.target.id === "popup-close") {
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup");

    // Añadir animaciones de salida
    overlay.style.animation = "fadeOut 0.5s ease forwards";
    popup.style.animation = "smoothOut 0.5s ease forwards";

    // Eliminar el pop-up después de la animación
    setTimeout(() => {
      overlay.style.display = "none";
      document.body.removeChild(overlay); // Remover el pop-up del DOM
    }, 500); // Tiempo igual al de las animaciones
  }
});

// Cargar el pop-up al iniciar
loadPopup();
