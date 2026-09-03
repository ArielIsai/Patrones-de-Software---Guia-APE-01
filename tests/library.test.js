const Libro = require('../biblioteca/models/Libro');
const LibroRepository = require('../biblioteca/repositories/LibroRepository');
const LibraryService = require('../biblioteca/services/LibraryService');

console.log("=== INICIANDO PRUEBAS UNITARIAS Y FUNCIONALES ===");

// Prueba 1: Buscar un libro existente
const repo = new LibroRepository();
const servicio = new LibraryService(repo.obtenerTodos());

const libroEncontrado = repo.buscarPorId(1);
assert(libroEncontrado !== null, "Prueba 1 Fallida: El libro con ID 1 debería existir");
console.log("[✔] Prueba 1 Exitosa: Libro encontrado ->", libroEncontrado.titulo);

// Prueba 2: Buscar un libro inexistente
const libroInexistente = repo.buscarPorId(999);
assert(libroInexistente === null, "Prueba 2 Fallida: Un libro inexistente debe retornar null");
console.log("[✔] Prueba 2 Exitosa: Búsqueda de libro inexistente retornó null correctamente.");

// Prueba 3: Prestar un libro disponible
const resultadoPrestamo = servicio.prestarLibro(1, "Ariel");
assert(resultadoPrestamo.exito === true, "Prueba 3 Fallida: Se debería poder prestar un libro disponible");
console.log("[✔] Prueba 3 Exitosa:", resultadoPrestamo.mensaje);

// Prueba 4: Prestar un libro que ya está prestado (debe fallar)
const resultadoPrestamoDoble = servicio.prestarLibro(1, "Carlos");
assert(resultadoPrestamoDoble.exito === false, "Prueba 4 Fallida: No se debe poder prestar un libro ya ocupado");
console.log("[✔] Prueba 4 Exitosa: Bloqueo correcto ->", resultadoPrestamoDoble.mensaje);

// Prueba 5: Devolver un libro prestado
const resultadoDevolucion = servicio.devolverLibro(1);
assert(resultadoDevolucion.exito === true, "Prueba 5 Fallida: Se debería poder devolver un libro prestado");
console.log("[✔] Prueba 5 Exitosa:", resultadoDevolucion.mensaje);

// Prueba 6: Devolver un libro que ya está disponible (debe fallar)
const resultadoDevolucionDoble = servicio.devolverLibro(1);
assert(resultadoDevolucionDoble.exito === false, "Prueba 6 Fallida: No se puede devolver un libro que ya está disponible");
console.log("[✔] Prueba 6 Exitosa: Bloqueo correcto ->", resultadoDevolucionDoble.mensaje);

console.log("\n=== ¡TODAS LAS PRUEBAS FINALIZARON CON ÉXITO! ===");

// Función auxiliar simple para aserciones
function assert(condicion, mensajeError) {
    if (!condicion) {
        console.error("[✖] ERROR:", mensajeError);
        process.exit(1);
    }
}