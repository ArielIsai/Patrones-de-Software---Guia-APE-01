const ESTADOS = require("../constants/BookStatus");

class LibraryService {

    constructor(libros) {
        this.libros = libros;
    }

    buscarLibroPorId(id) {
        var libro = null;

        for (var i = 0; i < this.libros.length; i++) {
            if (this.libros[i].id == id) {
                libro = this.libros[i];
            }
        }

        return libro;
    }

    prestarLibro(id, nombre) {
        var libro = this.buscarLibroPorId(id);

        if (libro == null) {
            return { exito: false, mensaje: "Libro no encontrado" };
        }

        if (nombre == null || nombre == "") {
            return { exito: false, mensaje: "Debe ingresar el nombre del usuario" };
        }

        if (libro.estado != ESTADOS.DISPONIBLE) {
            return { exito: false, mensaje: "No se puede prestar el libro porque ya está prestado" };
        }

        libro.estado = ESTADOS.PRESTADO;
        libro.usuario = nombre;

        return {
            exito: true,
            mensaje: "El libro " + libro.titulo + " fue prestado correctamente a " + nombre
        };
    }

    devolverLibro(id) {
        var libro = this.buscarLibroPorId(id);

        if (libro == null) {
            return { exito: false, mensaje: "Libro no encontrado" };
        }

        if (libro.estado != ESTADOS.PRESTADO) {
            return { exito: false, mensaje: "El libro no puede devolverse porque ya está disponible" };
        }

        var usuarioAnterior = libro.usuario;
        libro.estado = ESTADOS.DISPONIBLE;
        libro.usuario = "";

        return {
            exito: true,
            mensaje: "Devolución realizada. Libro: " + libro.titulo + ". Usuario anterior: " + usuarioAnterior
        };
    }
}

module.exports = LibraryService;