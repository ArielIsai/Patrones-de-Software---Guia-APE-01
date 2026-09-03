# Patrones-de-Software---Guia-APE-01
Refactorización de código base mediante principios de código limpio básicos


## 👥 Integrantes
* **Estudiantes:** 
* Ariel Cholota
* Lizbeth Ramos
* Rommel Gamboa

* **Asignatura:** Patrones de Software
* **Docente:** Javier Vargas

---

## 📖 Descripción del Proyecto
Aplicación desarrollada en **Node.js** bajo una arquitectura modular orientada a dominio. El sistema simula un entorno de gestión bibliotecaria aplicando principios de código limpio (**Clean Code**), separación de responsabilidades y principios fundamentales de diseño de software (**DRY, KISS, YAGNI, SRP**).

---

## ⚙️ Requisitos Previos
* **Node.js** (Versión 18.x o superior recomendada).
* Gestor de paquetes **npm** (incluido con Node.js).
* Consola de comandos (Git Bash, Terminal de VS Code o CMD).

---

## 📥 Instalación y Clonación
Clona el repositorio en tu máquina local ejecutando los siguientes comandos en tu terminal:

```bash
git clone [https://github.com/Ariellsai/Patrones-de-Software---Guia-APE-01.git](https://github.com/Ariellsai/Patrones-de-Software---Guia-APE-01.git)
cd Patrones-de-Software---Guia-APE-01
🚀 Ejecución del Sistema
Para iniciar la interfaz interactiva de usuario en consola (CLI), ejecuta el archivo principal:

Bash
node main.js
🗂️ Estructura Modular del Proyecto
El proyecto se encuentra organizado bajo una arquitectura desacoplada para garantizar escalabilidad y mantenimiento:

Plaintext
biblioteca/
├── constants/
│   └── codigos.js
├── models/
│   └── Libro.js
├── repositories/
│   └── LibroRepository.js
├── services/
│   └── BibliotecaService.js
├── tests/
│   └── testBiblioteca.js
├── main.js
├── package.json
└── README.md
Descripción de Componentes:
models/: Define las entidades base del sistema (estructura de datos de los libros).

repositories/: Gestiona el acceso directo a los datos y operaciones sobre arreglos.

services/: Contiene la lógica de negocio pura (reglas de préstamo, validación y devolución).

main.js: Punto de entrada de la interfaz de usuario en consola (CLI).

🛠️ Funcionalidades Principales
Listar libros: Muestra todo el catálogo disponible con sus respectivos estados.

Buscar libro: Permite localizar un libro específico por ID o coincidencia en el título.

Consultar disponibilidad: Verifica el estado actual del ejemplar en tiempo real.

Prestar libro: Aplica validaciones de existencia y cambia el estado a "prestado".

Devolver libro: Restablece el estado del ejemplar a "disponible".

📐 Principios de Ingeniería Aplicados
Clean Code: Nombres de variables y funciones autoexplicativos, eliminando comentarios innecesarios.

DRY (Don't Repeat Yourself): Centralización de búsquedas y validaciones en métodos genéricos reutilizables.

KISS (Keep It Simple, Stupid): Simplificación de condicionales complejos mediante expresiones booleanas directas.

YAGNI (You Aren't Gonna Need It): Eliminación de código muerto y funciones redundantes.

SRP (Single Responsibility Principle): Separación estricta entre la lógica de negocio (Services) y la interfaz visual de consola (CLI).

🧪 Pruebas Realizadas
Se validaron los siguientes escenarios operativos:

Búsqueda de libros existentes e inexistentes.

Transacciones de préstamo sobre libros disponibles y ya prestados.

Devoluciones correctas e incorrectas de ejemplares.

📌 Conclusiones Técnicas
La refactorización del código monolítico inicial hacia una arquitectura modular basada en patrones de diseño garantizó un código limpio, legible, altamente cohesivo y preparado para futuras ampliaciones.