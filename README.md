# Patrones-de-Software---Guia-APE-01
Refactorización de código base mediante principios de código limpio básicos

# Sistema de Gestión de Biblioteca

Aplicación modular desarrollada en Node.js bajo los principios de Clean Code, separación de responsabilidades, arquitectura en capas y principios SOLID (SRP).

## Integrantes del Grupo
* Ariel Cholota
* Lizbeth Ramos
* Rommel Gamboa

## Descripción del Proyecto
El sistema permite gestionar el catálogo de una biblioteca de manera interactiva a través de la consola, ofreciendo operaciones robustas de control de estado, búsqueda, préstamos y devoluciones de libros bajo una estructura limpia y mantenible.

## Estructura del Proyecto
```text
SistemaBibliotecario/
│
├── biblioteca/
│   ├── constants/
│   │   └── BookStatus.js       # Definición de estados del libro
│   ├── models/
│   │   └── Libro.js            # Entidad de dominio y reglas de negocio del libro
│   ├── repositories/
│   │   └── LibroRepository.js  # Capa de datos y consultas (Principio SRP)
│   └── services/
│       └── LibraryService.js   # Lógica de transacciones (Préstamos y devoluciones)
│
├── tests/                      # Casos de prueba y validaciones funcionales
│
├── main.js                     # Interfaz de usuario por consola y punto de entrada
└── README.md                   # Documentación oficial del proyecto
