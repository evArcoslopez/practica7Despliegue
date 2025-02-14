/**
 * @file about.js
 * @description Este script maneja la visualización de imágenes en la sección "about" de la página.
 * Cuando el DOM está completamente cargado, se muestran imágenes en secuencia al hacer clic en la imagen actual.
 */

// Espera a que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', mostrarImagenes());
    /**
    * Función que muestra las imagenes del documento jsdoc que nos hemos descargado del GitHub.
    * @function 
    */
    function mostrarImagenes() {

    /**
     * @constant {string[]} images - Array que contiene las rutas de las imágenes a mostrar.
     * @example ['./images/imagen1.png', './images/imagen2.jpg', './images/imagen3.png']
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];

    /**
     * @let {number} currentIndex - Índice de la imagen actual que se está mostrando.
     * @example 0 (inicia en la primera imagen)
     */
    let currentIndex = 0;

    /**
     * @constant {HTMLImageElement} imageElement - Elemento de imagen creado dinámicamente.
     * @example <img src="./images/imagen1.png">
     */
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex]; // Asigna la primera imagen al elemento.

    /**
     * Añade la imagen al contenedor con la clase 'content'.
     * @example <div class="content"><img src="./images/imagen1.png"></div>
     */
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Agrega un evento de clic a la imagen para cambiar a la siguiente imagen en la secuencia.
     * @event click
     * @listens imageElement
     */
    imageElement.addEventListener('click', () => {
        // Calcula el índice de la siguiente imagen usando el operador módulo (%).
        currentIndex = (currentIndex + 1) % images.length;

        // Actualiza la fuente de la imagen con la siguiente en la lista.
        imageElement.src = images[currentIndex];
    });
};
