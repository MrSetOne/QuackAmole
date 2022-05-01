# <center>QuackAmole</center>

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados
    * Nav responsive
    * Implementación de select en los formularios
    * Verificación de formulario y control de flujo
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

### Instalación y despliegue

Para instalar esta pagina solo tienes que tener acceso a internet y ejecutar el comando en consola `git clone https://github.com/MrSetOne/QuackAmole.git`, tambien se puede acceder a través de [este enlace](https://quackamole.netlify.app/)

### Tecnologías usadas

Para este proyecto hemos utilizado:
* HTML
* Bootstrap
* JavaScript
 
Hemos evitado usar CSS para tratar de masterizar lo máximo posible Bootstrap.

### Origen

Este proyecto fue planteado como un ejercicio sobre la lectura de documentación, adquisición de nuevos conocimientos de forma autodidacta y manejo del local storage.

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

### Concepto e inspiración

La temática principal de la página es una fusión de el concepto favorito de cada uno de los autores. En el caso de Rebeca son los patos y para Michael son los aguacates, por tanto, si los patos hacen "Cuack" y los aguacates hacen guacamole, la única opción lógica era llamar a este proyecto "CuackAmole".
A parte, hemos escogido el color verde ya que es el color que comparten los aguacates y muchas variedades de patos.
También, en el formulario se puede observar como hemos acabado con la cuestión de género cambiando los viejos y aburridos "hombre" y "mujer" por los nuevos y mejorados "pato" y "aguacate".

## Retos presentados

### Nav responsive

A la hora de tratar de hacer un nav responsive con Bootstrap tuvimos varios problemas, las plantillas que ofrecía la documentación no terminaban de encajar del todo con lo que teníamos en mente, tras varios intentos y errores finalmente logramos conseguir que tuviese el estilo que tiene actualmente. Donde más se nos complicó es a la hora de poner el "Burger Menu" ya que no entendíamos del todo bien cómo funcionaba la propiedad `Toggler`.

### Implementacion de select en los formularios

Ninguno de los dos habiamos usado los imputs de tipo select en un formulario funcional, con lo cual fué un reto descubrir como extraer los datos que necesitabamos del mismo y conseguir que volcase el valor deseado.

### Verificacion de formulario y control de flujo

* Ifs anidados:

Esta ha sido la primera vez que tenemos que hacer una verificacion de formulario, para ello hemos usado una serie de ifs anidados, cada uno con su respectivo else de salida, con ello conseguimos que se analicen cada una de las condiciones, si en cualquiera de los puntos se devuelve false, no se envía el resultado del formulario al LocalStorage y te devuelve un alert con el motivo por el que ocurre esto.

* Comprobaciones por regex:

Parte de las verificaciones de formulario pasan por un análisis de los caracteres que envía el formulario, para ello hemos elaborado la siguiente librería con regex:

``` JavaScript
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    psw: {
        whiteSpace: /^(?=.*\s)/,
        uppercase: /^(?=.*[A-Z])/,
        lowercase: /^(?=.*[a-z])/,
        number: /^(?=.*[0-9])/,
        length: /^.{8,25}$/,
    },
}
```
Una de las grandes virtudes de esta librería es que te permite modularizar la verificación de contraseñas en partes, y así se le puede devolver al usuario qué parte es la que está fallando.

### Dificultades con BootStrap
* Alerts de Bootstrap:

Los alerts nos dieron un gran calentamiento de cabeza, ya que no conseguiamos que funcionaran, por suerte unos compañeros necesitaban ayuda con su codigo e hicimos intercambio de conocimientos :wink:

* Colores:

    El outline de los inputs del formulario son azules y no hemos encontrado la manera de cambiarlo a verde como sí sucede en el botón. Esto es debido a que la clase que se utiliza para cambiar el color de este aspecto (class="btn btn-outline-secondary") es solo aplicable a type="button" y no responde cuando la insertas en un input sea del tipo que sea.

* Posición elementos del navBar:
    
    Otra de las cosas que no hemos podido solucionar debido a la limitación de personalización que ofrece Bootstrap es centrar horizontalmente los links de la barra de navegación manteniendo su responsividad.

## Agradecimientos

Un agradecimiento especial a [Germán](https://github.com/Molerog) y [Vanessa](https://github.com/vaneebg) por el intercambio de ideas/conocimientos, si no fuese sin ellos el sistema de alerts aun estaria en pañales.

## Autores

### [Michael](https://github.com/MrSetOne)

### [Rebeca](https://github.com/RebecaASuesta)