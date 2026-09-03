const LibroRepository = require('./biblioteca/repositories/LibroRepository');
const LibraryService = require('./biblioteca/services/LibraryService');
const readline = require('readline');

// Inicializar repositorio y servicio de negocio
const libroRepository = new LibroRepository();
const libraryService = new LibraryService(libroRepository.obtenerTodos());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n========================================");
    console.log("     SISTEMA DE GESTIÓN DE BIBLIOTECA   ");
    console.log("========================================");
    console.log("1. Listar todos los libros");
    console.log("2. Prestar un libro");
    console.log("3. Devolver un libro");
    console.log("4. Salir");
    console.log("----------------------------------------");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion.trim()) {
            case '1':
                listarLibros();
                break;
            case '2':
                prestarLibroPrompt();
                break;
            case '3':
                devolverLibroPrompt();
                break;
            case '4':
                console.log("\n¡Gracias por usar el sistema de biblioteca! Saliendo...");
                rl.close();
                break;
            default:
                console.log("\n[!] Opción inválida. Intente de nuevo.");
                mostrarMenu();
                break;
        }
    });
}

function listarLibros() {
    console.log("\n--- LISTADO DE LIBROS ---");
    const libros = libroRepository.obtenerTodos();
    libros.forEach(libro => {
        const info = libro.obtenerInfoCompleta();
        console.log(`ID: ${info.id} | Título: ${info.titulo} | Autor: ${info.autor} | Estado: ${info.estadoTexto} ${info.usuario ? `(Usuario: ${info.usuario})` : ''}`);
    });
    mostrarMenu();
}

function prestarLibroPrompt() {
    rl.question("\nIngrese el ID del libro a prestar: ", (idInput) => {
        const id = parseInt(idInput);
        rl.question("Ingrese el nombre del usuario: ", (nombre) => {
            const resultado = libraryService.prestarLibro(id, nombre);
            console.log("\n" + (resultado.exito ? "[ÉXITO]" : "[ERROR]") + " " + resultado.mensaje);
            mostrarMenu();
        });
    });
}

function devolverLibroPrompt() {
    rl.question("\nIngrese el ID del libro a devolver: ", (idInput) => {
        const id = parseInt(idInput);
        const resultado = libraryService.devolverLibro(id);
        console.log("\n" + (resultado.exito ? "[ÉXITO]" : "[ERROR]") + " " + resultado.mensaje);
        mostrarMenu();
    });
}

// Iniciar aplicación
console.log("Iniciando Sistema Bibliotecario...");
mostrarMenu();