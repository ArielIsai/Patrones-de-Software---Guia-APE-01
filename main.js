// biblioteca.js

const LibraryService = require("./biblioteca/services/LibraryService");
const ESTADOS = require("./biblioteca/constants/BookStatus");

var libros = [

    {
        id: 1,
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        estado: ESTADOS.DISPONIBLE,
        usuario: ""
    },

    {
        id: 2,
        titulo: "Design Patterns",
        autor: "Erich Gamma",
        estado: ESTADOS.DISPONIBLE,
        usuario: ""
    },

    {
        id: 3,
        titulo: "Refactoring",
        autor: "Martin Fowler",
        estado: ESTADOS.PRESTADO,
        usuario: "Juan"
    }

];

var libraryService = new LibraryService(libros);


// BUSCAR LIBRO

function buscar(x) {

    var encontrado = false;

    for (var i = 0; i < libros.length; i++) {

        if (
            libros[i].titulo.toLowerCase().includes(x.toLowerCase()) ||
            libros[i].autor.toLowerCase().includes(x.toLowerCase())
        ) {

            console.log(
                libros[i].id +
                " - " +
                libros[i].titulo +
                " - " +
                libros[i].autor
            );

            if (libros[i].estado == ESTADOS.DISPONIBLE) {
                console.log("Disponible");
            } else {
                console.log("Prestado");
            }

            encontrado = true;
        }
    }

    if (encontrado == false) {
        console.log("No se encontraron libros");
    }
}


// VER DISPONIBILIDAD

function disponibilidad(id) {

    var x = null;

    for (var i = 0; i < libros.length; i++) {

        if (libros[i].id == id) {
            x = libros[i];
        }
    }

    if (x == null) {

        console.log("Libro no encontrado");

    } else {

        if (x.estado == ESTADOS.DISPONIBLE) {

            console.log(
                "El libro " +
                x.titulo +
                " está disponible"
            );

        } else {

            console.log(
                "El libro " +
                x.titulo +
                " está prestado a " +
                x.usuario
            );
        }
    }
}


// LISTAR TODOS LOS LIBROS

function listar() {

    console.log("---------- BIBLIOTECA ----------");

    for (var i = 0; i < libros.length; i++) {

        console.log(
            libros[i].id +
            " | " +
            libros[i].titulo +
            " | " +
            libros[i].autor +
            " | " +
            libros[i].estado
        );
    }

    console.log("-------------------------------");
}


// PRUEBAS MANUALES

listar();

console.log("\nBUSCAR:");

buscar("Clean");

console.log("\nDISPONIBILIDAD:");

disponibilidad(1);

console.log("\nPRESTAR:");

console.log(libraryService.prestarLibro(1, "Carlos").mensaje);

console.log("\nDISPONIBILIDAD DESPUÉS DEL PRÉSTAMO:");

disponibilidad(1);

console.log("\nDEVOLVER:");

console.log(libraryService.devolverLibro(1).mensaje);

console.log("\nESTADO FINAL:");

disponibilidad(1);