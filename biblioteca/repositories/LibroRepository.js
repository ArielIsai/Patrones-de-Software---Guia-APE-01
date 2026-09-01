const Libro = require('../models/Libro');

class LibroRepository {
    constructor() {
        this.libros = [];
        this.inicializarDatos();
    }

    inicializarDatos() {
        this.libros = [
            new Libro(1, 'Clean Code', 'Robert C. Martin'),
            new Libro(2, 'Design Patterns', 'Erich Gamma'),
            new Libro(3, 'Refactoring', 'Martin Fowler', 'P', 'Juan')
        ];
    }

    obtenerTodos() {
        return this.libros;
    }

    buscarPorId(id) {
        return this.libros.find(libro => libro.id === id) || null;
    }

    buscarPorTexto(texto) {
        const busqueda = texto.toLowerCase().trim();
        if (!busqueda) return [];

        return this.libros.filter(libro =>
            libro.titulo.toLowerCase().includes(busqueda) ||
            libro.autor.toLowerCase().includes(busqueda)
        );
    }

    obtenerDisponibles() {
        return this.libros.filter(libro => libro.estaDisponible());
    }

    obtenerPrestados() {
        return this.libros.filter(libro => libro.estaPrestado());
    }
}

module.exports = LibroRepository;