/**
 * @file contact.js
 * @description Este script maneja el envío del formulario de contacto en la página.
 * Cuando el formulario se envía, valida que los campos no estén vacíos y muestra un mensaje de confirmación.
 */

// Espera a que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', enviarFormulario());

    /**
    * Función que envía los formularios.
    * @function
    */
    function enviarFormulario() {
        
    /**
     * @constant {HTMLFormElement} contactForm - Formulario de contacto.
     * @example <form id="contactForm">...</form>
     */
    const contactForm = document.getElementById('contactForm');

    /**
     * Agrega un evento de escucha para el envío del formulario.
     * @event submit
     * @listens contactForm
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página al enviar el formulario.

        /**
         * @let {string} name - Valor del campo de nombre.
         * @example "Juan Pérez"
         */
        const name = document.getElementById('name').value;

        /**
         * @let {string} message - Valor del campo de mensaje.
         * @example "Hola, me gustaría obtener más información."
         */
        const message = document.getElementById('message').value;

        /**
         * Verifica si el nombre y el mensaje no están vacíos.
         * @function
         */
        if (name.trim() !== '' && message.trim() !== '') {
            // Muestra un mensaje de agradecimiento si los campos están completos.
            alert(`¡Gracias por tu mensaje, ${name}!`);

            /**
             * Resetea el formulario después del envío.
             * @method reset
             * @memberof HTMLFormElement
             */
            contactForm.reset();
        } else {
            // Muestra una alerta si algún campo está vacío.
            alert('Por favor, completa todos los campos.');
        }
    });
};
