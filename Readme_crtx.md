# Aplicaciones Web - Unidad 1

## Información del Estudiante
* **Nombre:** Brandon Cardenas
* **Grupo:** N1
* **Sede:** Cuenca
* **Fecha:** 17/04/2026

## Descripción del Proyecto
Este proyecto es el resultado de la Actividad 1, basada en el código base de la Unidad 1 - Clase 5.

**🌐 Proyecto Publicado en Vivo:**  
El proyecto se encuentra desplegado y funcional para su revisión en vivo en la siguiente dirección:  
[https://cretax-systems.com/web/U1/](https://cretax-systems.com/web/U1/)


## Funcionalidades Implementadas

### 1. Diseño Moderno y Responsive
He migrado el estilo css que uso en mis otros proyectos a este proyecto, para que tenga un diseño mas moderno y responsivo, este denominado como cretax_modern_designs.css y se encuentra en la carpeta css
esto con el fin d eno volver a repetir codigo y tener un diseño mas consistente en mis proyectos.

### 2. Estructuración y Ampliación de Datos (JSON)
Se ha extendido el catálogo de películas a un total de 8 títulos en formato JSON (`peliculas.json`). Cada elemento de la cartelera ahora cuenta con información detallada, como un listado estructurado de sus géneros, sinopsis amplias, fecha de lanzamiento y esquemas de precios para catalogarlas (cartelera normal vs estrenos). También se elaboró una base de datos ligera para reseñas (`reseñas.json`) que permita enriquecer la experiencia de los perfiles.

### 3. Sistema de Notificaciones Inteligentes y Persistencia Local
Se desarrolló y estilizó una pequeña notificación de bienvenida en formato _Toast_. Para cuidar la experiencia del usuario, dicha notificación está vinculada a las rutinas de la API de `localStorage` del navegador. De este modo, la aplicación memoriza la visita del usuario y nos aseguramos de que no resulte invasiva al no repetirse en futuras recargas de la página.
