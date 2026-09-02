class Libro {
    constructor(id, titulo, autor, estado = 'D', usuario = '') {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado;
        this.usuario = usuario;
    }

    estaDisponible() {
        return this.estado === 'D';
    }

    estaPrestado() {
        return this.estado === 'P';
    }

    prestar(nombre) {
        if (!this.estaDisponible()) {
            throw new Error('El libro ya está prestado');
        }
        if (!nombre || nombre.trim() === '') {
            throw new Error('Debe ingresar el nombre del usuario');
        }
        this.estado = 'P';
        this.usuario = nombre;
        return this;
    }

    devolver() {
        if (!this.estaPrestado()) {
            throw new Error('El libro ya está disponible');
        }
        this.estado = 'D';
        this.usuario = '';
        return this;
    }

    obtenerEstadoTexto() {
        return this.estaDisponible() ? 'Disponible' : 'Prestado';
    }

    obtenerInfoCompleta() {
        return {
            id: this.id,
            titulo: this.titulo,
            autor: this.autor,
            estado: this.estado,
            usuario: this.usuario,
            estadoTexto: this.obtenerEstadoTexto()
        };
    }
}

module.exports = Libro;