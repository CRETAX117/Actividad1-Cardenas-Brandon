# Aplicaciones web – Unidad 1

## Información sobre el estudiante

* Nombre: Brandon Cardenas

* Grupo: N1

* Sede: Cuenca

* Datos: 17/04/2026

## Descripción del proyecto

Este proyecto es el resultado de la Actividad 1, basada en el código fuente de la Unidad 1 - Lección 5. He creado una página para ver películas, utilizando HTML y CSS, y he recuperado los datos con JavaScript y AJAX.

Mi proyecto está publicado en línea en el siguiente enlace: [https://cretax-systems.com/web/U1/](https://cretax-systems.com/web/U1/)

## Funcionalidades que he logrado implementar

### 1. Diseño y estilos

He configurado el diseño general de la página, vinculando un archivo CSS que ya tenía, llamado cretax_modern_designs.css, para que todas las páginas tengan el mismo fondo oscuro coherente. También he creado una barra de menú en la parte superior, donde he marcado manualmente qué pestaña está activa. Además, he agregado un pie de página al final de la página.

### 2. Cargar los JSON utilizando AJAX

He ampliado el archivo JSON de películas, agregando 8 películas nuevas. Luego, he utilizado la función $.ajax de jQuery para leer el archivo, pero he agregado un retraso de 5 segundos para mostrar una rueda de carga antes de mostrar los datos. También he verificado si la película es posterior a 2010 para etiquetarla como “Primera” y establecer un precio elevado.

En la página de detalles de la película, he utilizado la URL para extraer el ID de la película y he lanzado otro AJAX para solicitar el archivo de reseñas. Luego, he utilizado un ciclo for para pintar tantas estrellas como valoraciones tiene el usuario.

### 3. Formularios y validaciones personalizados

He creado un script para validar el formulario de contacto manualmente. No he utilizado solo el campo “required", sino que he creado un script con condiciones que controlan cada casilla. Si no hay una dirección de correo electrónico con @, o si el mensaje contiene menos de 20 o más de 50 palabras, muestro un texto de error oculto debajo y le digo al HTML que interrumpa inmediatamente el evento Submit.

También he creado un formulario para el alquiler múltiple. Cuando se presiona el botón, leo los seleccionados con jQuery y ejecuto un ciclo for anidado que recorre todas las películas en busca de coincidencias. Luego, tomo el valor del alquiler, los sumo, los multiplico por los días y inserto esta variable como texto total en una ventana modal Bootstrap.

### 4. Extra y LocalStorage

He agregado un botón que inserta dinámicamente un enlace de YouTube en una etiqueta iframe para mostrar un video emergente sin tener que cambiar a otra pestaña.

También he programado una pequeña notificación de bienvenida en la esquina inferior derecha. He insertado una lógica para que escriba automáticamente en tu navegador utilizando localStorage.setItem('welcomeShown', 'true') y así haya una condición la próxima vez que accedas, bloqueando el toast para que no se repita continuamente.