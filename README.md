# <center>QuackAmole</center>

## Índice

* Sobre el proyecto
    * Instalacion y despliegue
    * Tecnologias usadas
    * Origen
    * Objetivos
    * Concepto e inspiracion

* Retos presentados
    * Nav responsive
    * Implementacion de select en los formularios
    * Verificacion de formulario y control de flujo
        * Ifs anidados
        * Comprobaciones por regex
        
    * Dificultades con BootStrap
        * Alerts de Bootstrap <!-- Hay que añadir agradecimientos a German y Vanessa -->
        * Colores
        * Estrucutras
        <!-- Lo que se te ocurra -->
* Agradecimientos
* Autores

## Sobre el proyecto

### Instalacion y despliegue

Para instalar esta pagina solo tienes que tener acceso a internet y ejecutar el comando en consola `git clone https://github.com/MrSetOne/QuackAmole.git`, tambien se puede acceder a través de [este enlace](https://quackamole.netlify.app/)

### Tecnologias usadas

Para esta pagina hemos utilizado HTML, JavaScript y Bootstrap, hemos evitado usar CSS para tratar de masterizar lo maximo posible Bootstrap.

### Origen

Estre proyecto fue planteado como un ejercicio sobre la lectura de documentacion, adquisicion de nuevos conocimientos de forma autodidacta y manejo del local storage.

### Objetivos

- [X] Implementa un NavBar con el que puedas moverte por las 2 vistas de la página.

- [X] Crea la vista Crear Usuario que contenga lo siguiente:

    - [X] Formulario con los siguientes campos:

        - [X] Nombre

        - [X] Correo

        - [X] Contraseña 1
        
        - [X] Contraseña 2

    - [X] Guarda la información recogida de cada uno de los usuarios en localStorage.

    - [X] Implementa validación que obligue a rellenar todos los campos.

    - [X] Implementa una validación para el correo.

    - [X] Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
    
    - [X] Implementa una validación de contraseña.

    - [X] Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.

    - [X] Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.

    - [X] Muestra los mensajes utilizando los alerts de bootstrap.

- [X] Crea la vista Usuarios la cual debe mostrar en cards de bootstrap los usuarios guardados en localStorage con los siguientes campos:

    - [X] Nombre

    - [X] Correo

### Concepto e inspiracion

## Retos presentados

### Nav responsive

A la hora de tratar de hacer un nav responsive con Bootstrap tuvimos varios problemas, las plantillas que ofrecia la documentacion no terminaban de encajar del todo con lo que teniamos en mente, tras varios intentos y errores finalmente logramos conseguir que tuviese el estilo que tiene actualmente. Donde mas se nos complicó es a la hora de poner el "Burger Menu" ya que no entendiamos del todo bien como funcionaba la propiedad `Toggler`.

### Implementacion de select en los formularios

Ninguno de los dos habiamos usado los imputs de tipo select en un formulario funcional, con lo cual fué un reto descubrir como extraer los datos que necesitabamos del mismo y conseguir que volcase el valor deseado.

### Verificacion de formulario y control de flujo
* Ifs anidados:

* Comprobaciones por regex:

### Dificultades con BootStrap
* Alerts de Bootstrap:
 <!-- Hay que añadir agradecimientos a German y Vanessa -->
* Colores:

* Estrucutras:
        <!-- Lo que se te ocurra -->

## Agradecimientos

## Autores

<!-- ## Nuesto

- [X] Select
 
- [X] Validacion de datos

- [X] Showme

- [X] Alerts de Bootstrap

- [X] Radio links nav

- [X] Testear sistema de contraseñas en NodeJs

### Extras

- [ ] Form inputs outline

- [ ] Marcado en rojo de campos vacíos -->
