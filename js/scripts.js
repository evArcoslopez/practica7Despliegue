/**
 * @file script.js
 * @description Este script gestiona una lista de tareas (tasks) que se almacenan en el localStorage.
 * Permite agregar, eliminar y marcar tareas como completadas, y actualiza la interfaz de usuario en tiempo real.
 */

/**
 * Clase que representa una tarea.
 * @class
 */
class Task {
    /**
     * Constructor de la clase Task.
     * @constructor
     * @param {string} text - Texto de la tarea.
     */
    constructor(text) {
        /**
         * @property {string} text - Texto de la tarea.
         */
        this.text = text;

        /**
         * @property {boolean} completed - Estado de la tarea (completada o no).
         * @default false
         */
        this.completed = false;
    }
}

/**
 * Clase que gestiona una lista de tareas.
 * @class
 */
class TaskManager {
    /**
     * Constructor de la clase TaskManager.
     * @constructor
     */
    constructor() {
        /**
         * @property {Task[]} tasks - Lista de tareas.
         * @description Las tareas se cargan desde el localStorage o se inicializan como un array vacío.
         */
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Agrega una nueva tarea a la lista.
     * @method
     * @param {string} text - Texto de la tarea.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea de la lista.
     * @method
     * @param {number} index - Índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de una tarea (completada/no completada).
     * @method
     * @param {number} index - Índice de la tarea a modificar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el localStorage con la lista actual de tareas.
     * @method
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene la lista de tareas.
     * @method
     * @returns {Task[]} Lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

/**
 * Instancia de TaskManager para gestionar las tareas.
 * @type {TaskManager}
 */
const taskManager = new TaskManager();

/**
 * Agrega una nueva tarea desde el input del usuario.
 * @function
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        taskManager.addTask(text);
        taskInput.value = ''; // Limpia el campo de entrada.
        renderTasks(); // Actualiza la lista de tareas en la interfaz.
    }
}

/**
 * Elimina una tarea de la lista.
 * @function
 * @param {number} index - Índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks(); // Actualiza la lista de tareas en la interfaz.
}

/**
 * Renderiza la lista de tareas en la interfaz de usuario.
 * @function
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpia la lista actual.

    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';

        // Si la tarea está completada, se tacha el texto.
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar la tarea.
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añade una clase CSS.

        // Agrega el texto y el botón al elemento de la tarea.
        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);

        // Agrega la tarea a la lista.
        taskList.appendChild(taskEl);
    });
}

/**
 * Cambia el estado de una tarea (completada/no completada).
 * @function
 * @param {number} index - Índice de la tarea a modificar.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks(); // Actualiza la lista de tareas en la interfaz.
}

// Asocia la función addTask al evento click del botón "Agregar Tarea".
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Renderiza las tareas al cargar la página.
renderTasks();
