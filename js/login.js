// Espera a que el DOM esté completamente cargado para evitar errores de nodos inexistentes
document.addEventListener("DOMContentLoaded", () => {
  // Selección de los elementos del formulario mediante sus IDs
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");
  const eyeIcon = document.getElementById("eyeIcon");

  // Validación preventiva: Verifica que los elementos realmente existan en el HTML
  if (passwordInput && togglePasswordButton && eyeIcon) {
    // Escucha el evento de clic en el botón del ojo
    togglePasswordButton.addEventListener("click", () => {
      // Comprueba el estado actual del atributo 'type' (true si es password, false si es text)
      const isPassword = passwordInput.getAttribute("type") === "password";

      // Alterna el tipo de atributo del input según corresponda
      passwordInput.setAttribute("type", isPassword ? "text" : "password");

      // Intercambia las clases de Font Awesome para actualizar el icono visualmente
      if (isPassword) {
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  }
});
